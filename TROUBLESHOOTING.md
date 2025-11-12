# 🔧 Backend Connection Troubleshooting Guide

## ✅ Quick Fix Steps

### **Problem: "Unable to reach the server" error**

Follow these steps in order:

---

## 1️⃣ **Start the Backend Server**

Open a new PowerShell terminal and run:

```powershell
cd "g:\City Care Hospital\backend"
python app.py
```

**Expected output:**
```
Database initialized successfully!
🏥 CityCare Hospital Backend Server Starting...
📡 API running on http://127.0.0.1:5000
🔐 Admin token: citycare-admin-token
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://127.0.0.1:5000
```

✅ If you see this, the server is running!

---

## 2️⃣ **Test the Backend Connection**

### **Option A: Use the Test Page**
1. Open `test-connection.html` in your browser
2. It will automatically test the connection
3. Click "Test Health Endpoint" to verify

### **Option B: Use PowerShell**
```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/health"
```

**Expected response:**
```
message                          status
-------                          ------
CityCare Hospital API is running ok
```

---

## 3️⃣ **Open Your Website**

Make sure you're using **Live Server** or opening the HTML file properly:

### **Using Live Server (Recommended):**
1. Right-click on `index.html` in VS Code
2. Click "Open with Live Server"
3. Your browser should open: `http://127.0.0.1:5500/index.html`

### **Using File Protocol (NOT Recommended):**
- ❌ `file:///g:/City%20Care%20Hospital/index.html` - This may have CORS issues!
- ✅ Use Live Server instead!

---

## 4️⃣ **Test Login and Appointments**

1. **Open**: `http://127.0.0.1:5500/index.html`
2. **Click**: "Login" button
3. **Register**: Create a new account
4. **Book**: Fill the appointment form
5. **View**: Go to "My Appointments"

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Unable to reach the server"**

**Cause:** Backend server is not running

**Solution:**
```powershell
cd "g:\City Care Hospital\backend"
python app.py
```

---

### **Issue 2: "CORS Error" in Browser Console**

**Cause:** CORS not properly configured

**Solution:** Backend is already configured with CORS. Make sure you restarted the server after the fix.

To restart:
1. Press `Ctrl+C` in the terminal running the server
2. Run `python app.py` again

---

### **Issue 3: "ModuleNotFoundError: No module named 'flask'"**

**Cause:** Flask dependencies not installed

**Solution:**
```powershell
cd "g:\City Care Hospital\backend"
pip install -r requirements.txt
```

---

### **Issue 4: Port 5000 Already in Use**

**Cause:** Another application is using port 5000

**Solution 1 - Kill the process:**
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill it (replace PID with actual process ID)
taskkill /PID <PID> /F
```

**Solution 2 - Use a different port:**
Edit `backend/app.py` and change the port:
```python
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, debug=True)  # Changed to 5001
```

Then update `script.js`:
```javascript
const API_BASE = 'http://127.0.0.1:5001/api';  // Changed to 5001
```

---

### **Issue 5: Windows Firewall Blocking**

**Solution:**
1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Find Python and make sure both Private and Public are checked
4. If not listed, click "Allow another app" and add Python

---

## 🧪 **Testing Checklist**

Use this checklist to verify everything is working:

- [ ] Backend server is running (see green output in terminal)
- [ ] Health endpoint responds: `http://127.0.0.1:5000/api/health`
- [ ] `test-connection.html` shows all green checkmarks
- [ ] Can register a new user on `index.html`
- [ ] Can login with registered credentials
- [ ] Can book an appointment
- [ ] Can view appointments at `my-appointments.html`
- [ ] Admin can confirm appointments at `admin.html`

---

## 📊 **System Architecture**

```
┌─────────────────────────────────────────────────┐
│  Frontend (Live Server - Port 5500)             │
│  - index.html                                    │
│  - my-appointments.html                          │
│  - admin.html                                    │
│  - script.js                                     │
└──────────────┬──────────────────────────────────┘
               │
               │ HTTP Requests
               │ (CORS enabled)
               ▼
┌─────────────────────────────────────────────────┐
│  Backend (Flask - Port 5000)                    │
│  - app.py (API endpoints)                       │
│  - database.py (SQLite connection)              │
└──────────────┬──────────────────────────────────┘
               │
               │ SQL Queries
               ▼
┌─────────────────────────────────────────────────┐
│  Database (SQLite)                              │
│  - citycare.db                                  │
│    └─ users table                               │
│    └─ appointments table                        │
└─────────────────────────────────────────────────┘
```

---

## 🔍 **Debug Mode**

### **Check Backend Logs**
Look at the terminal running `python app.py`. You should see:
- Request logs: `127.0.0.1 - - [date] "POST /api/login HTTP/1.1" 200 -`
- Error messages if something goes wrong

### **Check Browser Console**
1. Press `F12` in your browser
2. Go to "Console" tab
3. Look for red error messages
4. Common errors:
   - `Failed to fetch` - Backend not running
   - `CORS policy` - CORS configuration issue
   - `404 Not Found` - Wrong API endpoint

### **Network Tab**
1. Press `F12` → "Network" tab
2. Try to login or book appointment
3. Look for requests to `127.0.0.1:5000`
4. Check status codes:
   - 200 = Success ✅
   - 400 = Bad request (check your data)
   - 404 = Endpoint not found
   - 500 = Server error (check backend logs)

---

## 💡 **Pro Tips**

1. **Keep backend terminal visible** - You can see all requests and errors
2. **Use test-connection.html** - Quick way to verify backend is working
3. **Clear browser cache** - If changes don't appear (Ctrl+Shift+R)
4. **Check database** - Use SQLite browser to view `backend/citycare.db`
5. **Read error messages** - They usually tell you exactly what's wrong!

---

## 📞 **Still Having Issues?**

If none of the above works:

1. Copy the **entire error message** from browser console
2. Copy the **backend terminal output**
3. Note what action triggered the error (login, register, book appointment)
4. Check if backend is still running (`http://127.0.0.1:5000/api/health`)

---

## ✅ **Success Indicators**

You'll know everything is working when:

- ✅ Backend shows: `Running on http://127.0.0.1:5000`
- ✅ `test-connection.html` shows all green messages
- ✅ Login redirects you and shows your name in navbar
- ✅ Appointment booking shows success dialog
- ✅ `my-appointments.html` displays your appointments
- ✅ No red errors in browser console (F12)

---

**🎉 Happy Testing!**
