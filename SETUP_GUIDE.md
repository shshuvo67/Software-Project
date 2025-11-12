# 🏥 CityCare Hospital - Complete System Setup

## ✅ Backend Successfully Created!

Your backend is now running with:
- **Language**: Python 3 with Flask framework
- **Database**: SQLite (lightweight, file-based)
- **Server**: http://127.0.0.1:5000
- **Admin Token**: `citycare-admin-token`

## 📂 Project Structure

```
City Care Hospital/
├── index.html          # Main website
├── admin.html          # Admin dashboard
├── script.js           # Frontend JavaScript
├── style.css           # Styling
└── backend/
    ├── app.py          # Flask server
    ├── database.py     # Database setup
    ├── citycare.db     # SQLite database file
    ├── requirements.txt
    └── README.md
```

## 🚀 How to Use

### 1. Backend is Already Running! ✅
The Flask server is running on http://127.0.0.1:5000

### 2. Open the Website
- Main website: Open `index.html` in your browser
- Admin dashboard: Open `admin.html` in your browser

### 3. Test the System

#### A) Register a New User
1. Open `index.html`
2. Click "Login/Register" in the navigation
3. Fill in registration form and submit
4. User data is saved to database!

#### B) Book an Appointment
1. Go to "Book an Appointment" section
2. Fill in the form
3. Select a doctor, date, and time
4. Submit - appointment is saved!

#### C) View Admin Dashboard
1. Open `admin.html` in browser
2. See all users and appointments
3. View statistics

## 🔐 Admin Access

**Admin Token**: `citycare-admin-token`

Use this token to:
- View all appointments: `GET /api/appointments?admin_token=citycare-admin-token`
- View all users: `GET /api/users?admin_token=citycare-admin-token`

## 📊 Database Features

### Users Table
- Stores user registration data
- Secure password hashing
- Email is unique identifier

### Appointments Table
- Stores all appointment bookings
- Links to user via user_id
- Tracks status (pending/confirmed/cancelled/completed)

## 🧪 Testing the API (PowerShell)

### Check if server is running:
```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/health"
```

### Register a test user:
```powershell
$body = @{
    name = "Alice Smith"
    email = "alice@example.com"
    password = "password123"
    phone = "01234567890"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/register" -Method POST -ContentType "application/json" -Body $body
```

### Login:
```powershell
$body = @{
    email = "alice@example.com"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/login" -Method POST -ContentType "application/json" -Body $body
```

### Create an appointment:
```powershell
$body = @{
    user_id = 1
    name = "Alice Smith"
    email = "alice@example.com"
    phone = "01234567890"
    doctor = "Dr. Anamul Haque"
    department = "Cardiology"
    date = "2025-11-15"
    time = "10:00 AM"
    message = "Regular checkup"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/appointments" -Method POST -ContentType "application/json" -Body $body
```

### View all appointments (Admin):
```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/appointments?admin_token=citycare-admin-token"
```

### View all users (Admin):
```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/users?admin_token=citycare-admin-token"
```

## 🛑 Stop the Server

Press `Ctrl + C` in the PowerShell terminal where the server is running.

## 🔄 Restart the Server

```powershell
cd "g:\City Care Hospital\backend"
python app.py
```

## 📝 Next Steps

1. ✅ Backend created - DONE
2. ✅ Database initialized - DONE
3. ✅ Server running - DONE
4. ✅ Admin dashboard created - DONE
5. Test registration and appointment booking on your website
6. View data in admin dashboard
7. Customize as needed!

## 💡 Why These Technologies?

### Python Flask
- ✅ Easy to learn and use
- ✅ Lightweight and fast
- ✅ Perfect for small to medium projects
- ✅ Great documentation

### SQLite
- ✅ No installation required
- ✅ File-based (easy backup)
- ✅ Perfect for single-server applications
- ✅ Zero configuration

## 🎯 Features Implemented

- [x] User registration with password hashing
- [x] User login authentication
- [x] Appointment booking
- [x] View user's own appointments
- [x] Admin dashboard to view all data
- [x] CORS enabled for frontend
- [x] RESTful API design
- [x] SQLite database persistence

Enjoy your fully functional hospital management system! 🎉
