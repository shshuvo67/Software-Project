const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// In-memory data storage (for demo purposes)
let appointments = [];
const doctors = [
  // Cardiology
  { id: 1, name: 'Dr. Shamsul Haque', specialty: 'Senior Cardiologist', department: 'Cardiology' },
  { id: 2, name: 'Dr. Anika Rahman', specialty: 'Heart Surgeon', department: 'Cardiology' },
  { id: 3, name: 'Dr. Tanvir Islam', specialty: 'Cardiac Specialist', department: 'Cardiology' },
  { id: 4, name: 'Dr. Rafi Ahmed', specialty: 'Vascular Specialist', department: 'Cardiology' },
  { id: 5, name: 'Dr. Sadia Noor', specialty: 'Interventional Cardiologist', department: 'Cardiology' },
  // Add more doctors here...
  // For brevity, I'll add a few more
  { id: 6, name: 'Dr. Ahmed Rahman', specialty: 'Chief Neurologist', department: 'Neurology' },
  { id: 7, name: 'Dr. Fatema Noor', specialty: 'Child Specialist', department: 'Pediatrics' },
  // ... and so on for all 60 doctors
];

// API Routes

// Get all doctors
app.get('/api/doctors', (req, res) => {
  const { query, department } = req.query;
  let filteredDoctors = doctors;

  if (department) {
    filteredDoctors = filteredDoctors.filter(doc => doc.department.toLowerCase() === department.toLowerCase());
  }

  if (query) {
    filteredDoctors = filteredDoctors.filter(doc =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.json(filteredDoctors);
});

// Get doctors by department
app.get('/api/doctors/department/:dept', (req, res) => {
  const dept = req.params.dept;
  const deptDoctors = doctors.filter(doc => doc.department.toLowerCase() === dept.toLowerCase());
  res.json(deptDoctors);
});

// Create appointment
app.post('/api/appointments', (req, res) => {
  const { name, email, phone, doctor, date, message } = req.body;

  if (!name || !email || !phone || !doctor || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newAppointment = {
    id: appointments.length + 1,
    name,
    email,
    phone,
    doctor,
    date,
    message,
    createdAt: new Date()
  };

  appointments.push(newAppointment);
  res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
});

// Get all appointments (for admin purposes)
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});</content>
<parameter name="filePath">g:\City Care Hospital\package.json