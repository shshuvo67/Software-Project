# 🏥 CityCare Hospital - Complete Setup & Demo Guide

## ✅ Backend is Already Running!

The Flask backend server is now running at: **http://127.0.0.1:5000**

---

## 🎯 Quick Demo - Follow These Steps:

### Option 1: Automated Demo Test (Easiest!)

1. **Open the Demo Test Page**:
   - Open `demo-test.html` in your browser
   - Click through the test steps in order
   - It will automatically register a user, login, and book an appointment

2. **View Results**:
   - Click "Open Admin Panel" to see all appointments
   - Click "Open Main Site" to see the logged-in experience

---

### Option 2: Manual Demo (Full Experience)

#### Step 1: Open the Main Website
1. Open `index.html` in your browser (using Live Server at http://127.0.0.1:5500)
2. You should see the CityCare Hospital homepage

#### Step 2: Register a New User
1. Click the **"Login"** link in the navigation bar
2. In the login modal, click **"Register here"** at the bottom
3. Click the **"⚡ Fill Test Data"** button (green button)
4. Click **"Create Account"**
5. You should see: "✅ Registration successful"

#### Step 3: Login
1. The login form should appear automatically after registration
2. If not, click "Login" in the navbar again
3. Click the **"⚡ Fill Test User"** button (green button)
4. Click **"Login"**
5. You should see: "✅ Login successful"
6. The navbar should now show your name instead of "Login"

#### Step 4: Book an Appointment
1. Scroll down to the **"Book an Appointment"** section
2. Click the **"⚡ Quick Fill (Test)"** button (green button)
3. Review the filled information:
   - Name: Your registered name
   - Email: Your email
   - Phone: Your phone number
   - Doctor: Dr. Anamul Haque (Cardiology)
   - Date: Tomorrow's date
   - Time: 10:00 AM
   - Message: Test appointment
4. Click **"Confirm Appointment"**
5. You should see: "✅ Appointment booked successfully!"
6. Click "Yes" when asked if you want to view your appointments

#### Step 5: View Your Appointments
You should now be on the "My Appointments" page showing:
- Your booked appointment details
- Doctor name: Dr. Anamul Haque
- Department: Cardiology
- Date and time
- Status: Pending

#### Step 6: View Admin Panel
1. Open `admin.html` in a new tab
2. You will see the **Admin Dashboard** with:
   - Total statistics (appointments, users, pending appointments)
   - A table showing ALL appointments in the system
   - Your appointment should be listed there
3. The admin can change appointment status by clicking action buttons

---

## 📋 Test Credentials

**Demo User Account:**
- Email: `demo@citycare.com`
- Password: `Demo@123`
- Phone: `01712345678`

**Admin Token:** `citycare-admin-token`

---

## 🎨 Features Demonstrated

### For Users:
✅ User Registration & Login
✅ Secure password hashing
✅ Session persistence (stays logged in)
✅ Book appointments with doctors
✅ Select doctor, date, and time
✅ View all personal appointments
✅ User-friendly interface with auto-fill for testing

### For Admins:
✅ View all appointments from all users
✅ See appointment statistics
✅ Filter by status (pending, confirmed, cancelled, completed)
✅ Real-time data updates
✅ Change appointment status
✅ View user information

### Backend Features:
✅ RESTful API with Flask
✅ SQLite database for data persistence
✅ CORS enabled for frontend communication
✅ Password hashing with Werkzeug
✅ User authentication
✅ Appointment management
✅ Admin endpoints with token authentication

---

## 📊 Database Structure

### Users Table:
- id, name, email, password_hash, phone, is_admin, created_at

### Appointments Table:
- id, user_id, name, email, phone, doctor, department
- appointment_date, appointment_time, message, status, created_at

---

## 🚀 API Endpoints

### Public Endpoints:
- `GET /api/health` - Check server status
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `POST /api/appointments` - Book appointment
- `GET /api/appointments?user_id={id}` - Get user's appointments

### Admin Endpoints:
- `GET /api/appointments?admin_token={token}` - Get all appointments
- `GET /api/users?admin_token={token}` - Get all users
- `PATCH /api/appointments/{id}` - Update appointment status

---

## 🔧 Troubleshooting

### Issue: "Unable to reach the server"
**Solution:** The backend is now running! If you still see this error:
1. Make sure the backend is running in the terminal
2. Check that it shows: "Running on http://127.0.0.1:5000"
3. Don't close the terminal where the backend is running

### Issue: Can't see appointments
**Solution:** 
1. Make sure you're logged in first
2. Book an appointment
3. Click "My Appointments" in the user dropdown menu

### Issue: Registration fails with "Email already registered"
**Solution:** 
1. Use the login form instead
2. Or register with a different email
3. Or use the demo test page which creates unique emails

---

## 📁 Files Overview

- `index.html` - Main website (homepage, booking form)
- `admin.html` - Admin dashboard (view all appointments)
- `my-appointments.html` - User appointments page
- `demo-test.html` - Automated testing page (NEW!)
- `script.js` - Frontend JavaScript (with quick-fill buttons)
- `style.css` - Styling
- `backend/app.py` - Flask backend server
- `backend/database.py` - Database setup
- `backend/citycare.db` - SQLite database (auto-created)

---

## ✨ Quick Fill Buttons (Test Mode)

When running on localhost, you'll see green **"⚡"** buttons:

1. **Login Form**: "⚡ Fill Test User" - Auto-fills demo credentials
2. **Register Form**: "⚡ Fill Test Data" - Auto-fills registration data
3. **Appointment Form**: "⚡ Quick Fill (Test)" - Auto-fills appointment details

These buttons make testing super fast! 🚀

---

## 🎉 Summary

Your CityCare Hospital booking system is now fully functional with:

1. ✅ Backend server running on port 5000
2. ✅ Database initialized and ready
3. ✅ User authentication working
4. ✅ Appointment booking functional
5. ✅ Admin panel to view all appointments
6. ✅ Data persistence (appointments saved to database)
7. ✅ Quick-fill buttons for easy testing

**Next Steps:**
- Open `demo-test.html` for an automated demo
- Or follow the manual steps above
- Check `admin.html` to see all appointments
- All data is saved in `backend/citycare.db`

Enjoy your fully functional hospital management system! 🏥✨
