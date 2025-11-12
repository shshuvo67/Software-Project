# 📋 CityCare Hospital - User Guide

## How Login & Appointment System Works

### 🔐 **Step 1: Login or Register**

1. Open `index.html` in your browser
2. Click **"Login"** button in the navbar
3. Two options:
   - **Login**: Enter email and password (if you already have an account)
   - **Register**: Click "Register here" and fill in your details (name, email, password, phone)

**What happens after login?**
- ✅ Your name appears in the navbar with a dropdown menu
- ✅ Dropdown shows: "My Appointments", "Profile", and "Logout"
- ✅ You can now view all your appointments

---

### 📅 **Step 2: Book an Appointment**

1. Scroll to the **"Book an Appointment"** section on `index.html`
2. Fill in the form:
   - Name
   - Email
   - Phone
   - Select Doctor
   - Select Date
   - Select Time
   - Message (optional)
3. Click **"Book Appointment"**

**What happens after booking?**
- ✅ Success message appears
- ✅ If you're logged in, you'll be asked: "Would you like to view your appointments now?"
  - Click **OK** → Redirects to `my-appointments.html`
  - Click **Cancel** → Stay on the page
- ✅ Appointment is saved to the database

---

### 📋 **Step 3: View Your Appointments**

**Option 1: Using the Navbar**
- After login, click your name in the navbar
- Select **"📋 My Appointments"** from the dropdown
- Opens `my-appointments.html` showing all your appointments

**Option 2: Direct Link**
- Open `my-appointments.html` directly in your browser
- If not logged in, you'll see a "Login Required" message

**What you'll see:**
- ✅ List of all your appointments
- ✅ Doctor name and department
- ✅ Appointment date and time
- ✅ Status badges (Pending/Confirmed/Cancelled/Completed)
- ✅ Your message to the doctor
- ✅ Date when appointment was booked

---

### 👨‍⚕️ **Admin Dashboard**

**For Admins Only:**
1. Open `admin.html` in your browser
2. View:
   - All appointments from all users
   - All registered users
   - Statistics (total users, appointments, pending, confirmed)

**Admin Actions:**
- ✅ **Confirm** pending appointments (green button)
- ✅ **Cancel** appointments (red button)
- ✅ **Complete** confirmed appointments (blue button)
- ✅ **Reconfirm** cancelled appointments

---

## 🔄 Complete User Flow

```
1. User opens index.html
   ↓
2. Clicks "Login" → Enters credentials → Logs in
   ↓
3. Navbar changes to show user's name with dropdown menu
   ↓
4. User scrolls to "Book Appointment" section
   ↓
5. Fills form and submits
   ↓
6. Success message: "Would you like to view your appointments?"
   ↓
7. User clicks OK → Redirects to my-appointments.html
   ↓
8. User sees their appointment with "Pending" status
   ↓
9. Admin opens admin.html
   ↓
10. Admin clicks "Confirm" button on the appointment
   ↓
11. User refreshes my-appointments.html
   ↓
12. Status changes to "Confirmed" ✅
```

---

## 🎯 Quick Tips

- **Logged In Users**: Can book appointments linked to their account
- **Guest Users**: Can book appointments without login (using email only)
- **Navbar Dropdown**: Click your name to access "My Appointments" and "Profile"
- **After Booking**: Click "OK" on the confirmation dialog to view appointments immediately
- **Admin Dashboard**: Use `admin.html` to manage all appointments and users

---

## 🔧 Technical Details

- **Backend API**: `http://127.0.0.1:5000/api`
- **Database**: SQLite (`backend/citycare.db`)
- **User Appointments**: Linked via `user_id` in database
- **Admin Token**: `citycare-admin-token` (for admin.html)

---

## 📞 Support

If you encounter any issues:
1. Make sure the backend server is running (`python app.py` in the `backend` folder)
2. Check the browser console for errors (F12)
3. Verify you're using the correct login credentials
4. Refresh the page if data doesn't update

**Enjoy using CityCare Hospital! 🏥**
