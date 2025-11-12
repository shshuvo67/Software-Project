# 🚀 How to Start the Backend Server

## Quick Start (2 Steps):

### Step 1: Open Terminal/Command Prompt
- In VS Code: Press `Ctrl + `` (backtick) or go to Terminal → New Terminal
- Or open PowerShell/Command Prompt in Windows

### Step 2: Run These Commands:

```bash
cd "h:\New folder\City Care Hospital\backend"
python app.py
```

**That's it!** You should see:
```
🏥 CityCare Hospital Backend Server Starting...
📡 API running on http://127.0.0.1:5000
🔐 Admin token: citycare-admin-token
 * Running on http://127.0.0.1:5000
```

---

## ⚠️ Important:

1. **Keep the terminal window open** - Don't close it while using the website
2. **The server must be running** for appointments to save
3. **To stop the server**: Press `Ctrl + C` in the terminal

---

## 🖥️ On Another PC:

1. **Copy the entire project folder** to the new PC
2. Make sure Python is installed (`python --version`)
3. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
4. Start the server:
   ```bash
   python app.py
   ```

**All your data will still be there!** The database file (`citycare.db`) stores everything permanently.

---

## 📊 Your Data is Safe:

- All appointments are saved in: `backend/citycare.db`
- All user accounts are saved in: `backend/citycare.db`
- This is a **SQLite database file** that persists between sessions
- Even if you close the server, the data remains

---

## 🔄 Daily Usage:

**Every time you want to use the system:**

1. Open terminal
2. Run: `cd "h:\New folder\City Care Hospital\backend"`
3. Run: `python app.py`
4. Open your browser to the website
5. Book appointments, register users, etc.
6. When done, press `Ctrl + C` to stop the server

**Next time you start it, all previous data will still be there!**

---

## ✅ Verify It's Working:

Open in browser: http://127.0.0.1:5000/api/health

You should see: `{"message":"CityCare Hospital API is running","status":"ok"}`

---

## 🆘 Troubleshooting:

### "Python not found"?
Install Python from: https://www.python.org/downloads/

### "Module not found"?
Run: `pip install -r requirements.txt`

### "Port already in use"?
Another server is running. Stop it or change the port in `app.py`

### Want to run on startup automatically?
Create a batch file `start_server.bat`:
```batch
@echo off
cd /d "h:\New folder\City Care Hospital\backend"
python app.py
pause
```
Double-click this file to start the server!
