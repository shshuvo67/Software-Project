# 🚀 Quick Start Guide - CityCare Hospital

## ✅ **FIXED: Backend is Now Running!**

Your backend server is **ACTIVE** and ready to use! ✅

---

## 📋 **Current Status:**

✅ **Backend Server**: Running on `http://127.0.0.1:5000`  
✅ **Database**: Initialized successfully  
✅ **CORS**: Configured to work with Live Server  
✅ **Admin Token**: `citycare-admin-token`  

---

## 🎯 **How to Use Your Website:**

### **Step 1: Open Your Website**

**Option A: Using Live Server (Recommended)**
1. In VS Code, right-click `index.html`
2. Select "Open with Live Server"
3. Browser opens at: `http://127.0.0.1:5500/index.html`

**Option B: Double-click HTML files**
- Works but may have some limitations

---

### **Step 2: Test the Connection** ✅

Before using the main site, verify backend is working:

1. Open `test-connection.html` in your browser
2. You should see:
   - ✅ SUCCESS: Backend is running!
   - Green checkmarks for all tests

---

### **Step 3: Use the Website** 🏥

#### **A. Register & Login**
1. Click **"Login"** button in navbar
2. Click **"Register here"**
3. Fill in your details:
   - Name: Your Name
   - Email: your@email.com
   - Password: yourpassword
   - Phone: 01712345678
4. Click **"Create Account"**
5. ✅ Success! You're now logged in

#### **B. Book an Appointment**
1. Scroll to **"Book an Appointment"** section
2. Fill the form:
   - Your name and contact info
   - Select a doctor
   - Choose date and time
   - Add message (optional)
3. Click **"Book Appointment"**
4. Dialog appears: "Would you like to view your appointments?"
5. Click **OK** → Redirects to `my-appointments.html`

#### **C. View Your Appointments**
- **From Navbar**: Click your name → "📋 My Appointments"
- **Direct**: Open `my-appointments.html`
- You'll see:
  - All your appointments
  - Status: Pending/Confirmed/Cancelled/Completed
  - Doctor, date, time details

#### **D. Admin Dashboard** (For Admins)
1. Open `admin.html`
2. View all users and appointments
3. **Confirm appointments**: Click ✅ Confirm button
4. **Cancel appointments**: Click ❌ Cancel button
5. **Complete appointments**: Click ✔️ Complete button

---

## 🔧 **Troubleshooting**

### **If you see "Unable to reach the server":**

1. **Check if backend is running:**
   ```powershell
   # Look for this in the terminal:
   Running on http://127.0.0.1:5000
   ```

2. **If NOT running, start it:**
   ```powershell
   cd "g:\City Care Hospital\backend"
   python app.py
   ```

3. **Test the connection:**
   - Open `test-connection.html`
   - Should show green ✅ SUCCESS messages

4. **Still not working?**
   - Read `TROUBLESHOOTING.md` for detailed solutions

---

## 📁 **Important Files:**

| File | Purpose |
|------|---------|
| `index.html` | Main website |
| `my-appointments.html` | View your appointments |
| `admin.html` | Admin dashboard |
| `test-connection.html` | Test if backend is working |
| `backend/app.py` | Backend server (MUST BE RUNNING) |

---

## 🎓 **Key Features:**

✅ User registration and login  
✅ Book appointments with doctors  
✅ View appointment history  
✅ Admin can confirm/cancel/complete appointments  
✅ Real-time status updates  
✅ Secure password hashing  
✅ Database persistence  

---

## 💡 **Pro Tips:**

1. **Keep backend terminal open** - You can see all activity
2. **Use test-connection.html first** - Verify backend before testing features
3. **Bookmark my-appointments.html** - Quick access to your appointments
4. **Admin dashboard** - Use `admin.html` to manage everything

---

## 🎯 **Complete Workflow Example:**

```
1. Start Backend:
   cd backend
   python app.py
   ✅ Server running on http://127.0.0.1:5000

2. Test Connection:
   Open test-connection.html
   ✅ All tests pass

3. Open Website:
   Right-click index.html → Open with Live Server
   ✅ Opens at http://127.0.0.1:5500

4. Register:
   Click Login → Register → Fill form
   ✅ Account created

5. Book Appointment:
   Fill appointment form → Submit
   ✅ Appointment booked

6. View Appointments:
   Click your name → My Appointments
   ✅ See your appointment with "Pending" status

7. Admin Confirms:
   Open admin.html → Click ✅ Confirm
   ✅ Status changes to "Confirmed"

8. Refresh Your Appointments:
   Go back to my-appointments.html → Refresh
   ✅ Status now shows "Confirmed"
```

---

## ✅ **You're All Set!**

The backend is **RUNNING** and **READY TO USE**! 🎉

- Backend: ✅ Active on port 5000
- CORS: ✅ Configured
- Database: ✅ Initialized
- Website: ✅ Ready to test

**Just open `index.html` with Live Server and start using it!**

---

## 📞 **Need Help?**

1. Check `TROUBLESHOOTING.md` for common issues
2. Use `test-connection.html` to diagnose problems
3. Look at backend terminal for error messages
4. Press F12 in browser to see console errors

**Enjoy your hospital management system! 🏥**
