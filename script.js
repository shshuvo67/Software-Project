// ===== Responsive Navbar Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("active");
});

// ===== Doctor Card Social Links =====
const doctorCardElements = document.querySelectorAll('.doctor-card');
const socialIcons = {
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93Z"></path></svg>',
  twitter:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.53 6.46c-.77.34-1.6.57-2.46.67a4.27 4.27 0 0 0 1.87-2.36 8.54 8.54 0 0 1-2.7 1.06 4.23 4.23 0 0 0-7.2 3.86 12 12 0 0 1-8.72-4.42 4.24 4.24 0 0 0 1.31 5.65 4.2 4.2 0 0 1-1.91-.53v.05a4.24 4.24 0 0 0 3.39 4.15 4.2 4.2 0 0 1-1.9.07 4.24 4.24 0 0 0 3.95 2.94A8.5 8.5 0 0 1 3 18.58 12 12 0 0 0 9.29 20.5c7.55 0 11.68-6.29 11.68-11.75 0-.18-.01-.35-.02-.53a8.36 8.36 0 0 0 2.05-2.12Z"></path></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.16 1.47-2.16 2.97v5.7H9.32V9h3.4v1.56h.05c.47-.88 1.61-1.8 3.31-1.8 3.54 0 4.19 2.33 4.19 5.36v6.33ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13h3.56V9H3.56v11.43ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.74C24 .78 23.21 0 22.23 0Z"></path></svg>'
};

const socialPlatforms = [
  { key: 'facebook', label: 'Facebook', className: 'facebook' },
  { key: 'twitter', label: 'Twitter', className: 'twitter' },
  { key: 'linkedin', label: 'LinkedIn', className: 'linkedin' }
];

const doctorPricing = {
  'Dr. Anamul Haque': 1000,
  'Dr. Anamul Haque - Senior Cardiologist': 1000,
  'Dr. Anika Rahman': 950,
  'Dr. Anika Rahman - Heart Surgeon': 950,
  'Dr. Tanvir Islam': 900,
  'Dr. Tanvir Islam - Cardiac Specialist': 900,
  'Dr. Ahmed Rahman': 950,
  'Dr. Ahmed Rahman - Neurologist': 950,
  'Dr. Samira Noor': 900,
  'Dr. Samira Noor - Brain Surgeon': 900,
  'Dr. Hasan Karim': 800,
  'Dr. Hasan Karim - Nerve Specialist': 800,
  'Dr. Fatema Noor': 750,
  'Dr. Fatema Noor - Child Specialist': 750,
  'Dr. Mahir Hasan': 750,
  'Dr. Mahir Hasan - Infant Care Expert': 750,
  'Dr. Ruma': 700,
  'Dr. Ruma Begum': 700,
  'Dr. Ruma Neonatologist': 700,
  'Dr. Ruma - Neonatologist': 700,
  'Dr. Ayesha Karim': 850,
  'Dr. Ayesha Karim - Bone & Joint Specialist': 850,
  'Dr. Hasan Chowdhury': 800,
  'Dr. Hasan Chowdhury - Sports Injury Expert': 800,
  'Dr. Rifat Noman': 800,
  'Dr. Rifat Noman - Spine Surgeon': 800,
  'Dr. Nabila Sultana': 750,
  'Dr. Nabila Sultana - Skin Specialist': 750,
  'Dr. Shafik Ahmed': 800,
  'Dr. Ahmed': 800,
  'Dr. Ahmed - Cosmetic Dermatologist': 800,
  'Dr. Laila Hasan': 700,
  'Dr. Rima Chowdhury': 700,
  'Dr. Rima Chowdhury - Allergy Expert': 700,
  'Dr. Saiful Islam': 1000,
  'Dr. Saiful Islam - Cancer Specialist': 1000,
  'Dr. Nargis Jahan': 950,
  'Dr. Nargis Jahan - Radiation Oncologist': 950,
  'Dr. Farhan Aziz': 900,
  'Dr. Farhan Aziz - Chemotherapy Specialist': 900,
  'Dr. Shafayat Rahman': 800,
  'Dr. Shafayat Rahman - Eye Surgeon': 800,
  'Dr. Sumon Islam': 750,
  'Dr. Sumon Islam - Retina Specialist': 750,
  'Dr. Nusrat Hossain': 750,
  'Dr. Nusrat Hossain - Cornea Specialist': 750,
  'Dr. Mahmud Hossain': 900,
  'Dr. Mahmud Hossain - Mental Health Specialist': 900,
  'Dr. Farhana Alam': 700,
  'Dr. Farhana Alam - Clinical Psychologist': 700,
  'Dr. Sharmin Chowdhury': 700,
  'Dr. Sharmin Chowdhury - Therapist': 700,
  'Dr. Niloy Ahmed': 850,
  'Dr. Niloy Ahmed - Dental Surgeon': 850,
  'Dr. Sumiya Rahman': 800,
  'Dr. Sumiya Rahman - Orthodontist': 800,
  'Dr. Arman Khan': 800,
  'Dr. Arman Khan - Prosthodontist': 800
};

const formatAppointmentTime = (totalMinutes) => {
  const hour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const minuteLabel = minutes.toString().padStart(2, '0');
  return `${hour12}:${minuteLabel} ${period}`;
};

const generateTimeSlots = (startHour, endHour, intervalMinutes = 20) => {
  const slots = [];
  const startMinutes = Math.round(startHour * 60);
  const endMinutes = Math.round(endHour * 60);
  for (let minutes = startMinutes; minutes < endMinutes; minutes += intervalMinutes) {
    if (minutes < 0) {
      continue;
    }
    slots.push(formatAppointmentTime(minutes));
  }
  return slots;
};

const defaultTimeSlots = generateTimeSlots(9, 21);

// Store booked appointments to check availability
let bookedAppointments = [];

const doctorAvailability = {
  'Dr. Anamul Haque': generateTimeSlots(9, 13),
  'Dr. Anamul Haque - Senior Cardiologist': generateTimeSlots(9, 13),
  'Dr. Anika Rahman': generateTimeSlots(12, 18),
  'Dr. Anika Rahman - Heart Surgeon': generateTimeSlots(12, 18),
  'Dr. Tanvir Islam': generateTimeSlots(15, 21),
  'Dr. Tanvir Islam - Cardiac Specialist': generateTimeSlots(15, 21),
  'Dr. Ahmed Rahman': generateTimeSlots(10, 16),
  'Dr. Ahmed Rahman - Neurologist': generateTimeSlots(10, 16),
  'Dr. Samira Noor': generateTimeSlots(11, 19),
  'Dr. Samira Noor - Brain Surgeon': generateTimeSlots(11, 19),
  'Dr. Hasan Karim': generateTimeSlots(13, 20),
  'Dr. Hasan Karim - Nerve Specialist': generateTimeSlots(13, 20),
  'Dr. Fatema Noor': generateTimeSlots(9, 14),
  'Dr. Fatema Noor - Child Specialist': generateTimeSlots(9, 14),
  'Dr. Mahir Hasan': generateTimeSlots(10, 15),
  'Dr. Mahir Hasan - Infant Care Expert': generateTimeSlots(10, 15),
  'Dr. Ruma': generateTimeSlots(14, 20),
  'Dr. Ruma Begum': generateTimeSlots(14, 20),
  'Dr. Ruma Neonatologist': generateTimeSlots(14, 20),
  'Dr. Ruma - Neonatologist': generateTimeSlots(14, 20),
  'Dr. Ayesha Karim': generateTimeSlots(9, 14),
  'Dr. Ayesha Karim - Bone & Joint Specialist': generateTimeSlots(9, 14),
  'Dr. Hasan Chowdhury': generateTimeSlots(12, 19),
  'Dr. Hasan Chowdhury - Sports Injury Expert': generateTimeSlots(12, 19),
  'Dr. Rifat Noman': generateTimeSlots(15, 21),
  'Dr. Rifat Noman - Spine Surgeon': generateTimeSlots(15, 21),
  'Dr. Nabila Sultana': generateTimeSlots(11, 17),
  'Dr. Nabila Sultana - Skin Specialist': generateTimeSlots(11, 17),
  'Dr. Shafik Ahmed': generateTimeSlots(13, 20),
  'Dr. Ahmed': generateTimeSlots(13, 20),
  'Dr. Ahmed - Cosmetic Dermatologist': generateTimeSlots(13, 20),
  'Dr. Laila Hasan': generateTimeSlots(9, 13),
  'Dr. Rima Chowdhury': generateTimeSlots(9, 13),
  'Dr. Rima Chowdhury - Allergy Expert': generateTimeSlots(9, 13),
  'Dr. Saiful Islam': generateTimeSlots(10, 19),
  'Dr. Saiful Islam - Cancer Specialist': generateTimeSlots(10, 19),
  'Dr. Nargis Jahan': generateTimeSlots(12, 19),
  'Dr. Nargis Jahan - Radiation Oncologist': generateTimeSlots(12, 19),
  'Dr. Farhan Aziz': generateTimeSlots(14, 21),
  'Dr. Farhan Aziz - Chemotherapy Specialist': generateTimeSlots(14, 21),
  'Dr. Shafayat Rahman': generateTimeSlots(9, 16),
  'Dr. Shafayat Rahman - Eye Surgeon': generateTimeSlots(9, 16),
  'Dr. Sumon Islam': generateTimeSlots(11, 19),
  'Dr. Sumon Islam - Retina Specialist': generateTimeSlots(11, 19),
  'Dr. Nusrat Hossain': generateTimeSlots(13, 21),
  'Dr. Nusrat Hossain - Cornea Specialist': generateTimeSlots(13, 21),
  'Dr. Mahmud Hossain': generateTimeSlots(10, 18),
  'Dr. Mahmud Hossain - Mental Health Specialist': generateTimeSlots(10, 18),
  'Dr. Farhana Alam': generateTimeSlots(12, 21),
  'Dr. Farhana Alam - Clinical Psychologist': generateTimeSlots(12, 21),
  'Dr. Sharmin Chowdhury': generateTimeSlots(9, 15),
  'Dr. Sharmin Chowdhury - Therapist': generateTimeSlots(9, 15),
  'Dr. Niloy Ahmed': generateTimeSlots(9, 17),
  'Dr. Niloy Ahmed - Dental Surgeon': generateTimeSlots(9, 17),
  'Dr. Sumiya Rahman': generateTimeSlots(11, 19),
  'Dr. Sumiya Rahman - Orthodontist': generateTimeSlots(11, 19),
  'Dr. Arman Khan': generateTimeSlots(13, 21),
  'Dr. Arman Khan - Prosthodontist': generateTimeSlots(13, 21)
};

const formatFee = (value) => {
  const amount = Number(value);
  if (!Number.isFinite(amount)) {
    return 'BDT —';
  }
  return `BDT ${amount.toLocaleString('en-US')}`;
};

const doctorSelect = document.querySelector('select[name="doctor"]');
const appointmentTimeSelect = document.getElementById('appointmentTime');
const doctorDataMap = new Map();

const API_BASE = 'http://127.0.0.1:5000/api';
const STORAGE_KEY_USER = 'citycare_current_user';

const safeStorage = (() => {
  try {
    const key = '__citycare_test__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return window.localStorage;
  } catch (error) {
    console.warn('Local storage is not available:', error);
    return null;
  }
})();

const loadStoredUser = () => {
  if (!safeStorage) {
    return null;
  }
  try {
    const raw = safeStorage.getItem(STORAGE_KEY_USER);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('Unable to read stored user:', error);
    return null;
  }
};

const persistCurrentUser = (user) => {
  if (!safeStorage) {
    return;
  }
  try {
    safeStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
  } catch (error) {
    console.warn('Unable to persist user:', error);
  }
};

const clearStoredUser = () => {
  if (!safeStorage) {
    return;
  }
  try {
    safeStorage.removeItem(STORAGE_KEY_USER);
  } catch (error) {
    console.warn('Unable to clear stored user:', error);
  }
};

const apiFetch = async (path, options = {}) => {
  const config = {
    credentials: 'include',
    ...options
  };

  config.headers = {
    Accept: 'application/json',
    ...(options.headers || {})
  };

  if (config.body && !(config.body instanceof FormData) && typeof config.body !== 'string') {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(config.body);
  }

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, config);
  } catch (networkError) {
    const error = new Error('Unable to reach the server. Please ensure the backend is running.');
    error.cause = networkError;
    throw error;
  }
  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch (error) {
      payload = { error: text };
    }
  }

  if (!response.ok) {
    const error = new Error(payload && payload.error ? payload.error : 'Request failed');
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
};

doctorCardElements.forEach((card) => {
  const doctorName = card.dataset.name;
  if (!doctorName) {
    return;
  }

  const departmentTitle = card.closest('.department')?.querySelector('.dept-title')?.textContent?.trim();
  if (departmentTitle) {
    card.dataset.department = departmentTitle;
  }

  const specialtyText = card.dataset.specialty || card.querySelector('p')?.textContent?.trim() || '';
  const priceValue = doctorPricing[doctorName];

  if (priceValue) {
    card.dataset.price = priceValue;
    if (!card.querySelector('.doctor-price')) {
      const priceTag = document.createElement('span');
      priceTag.className = 'doctor-price';
      priceTag.textContent = `Consultation Fee: ${formatFee(priceValue)}`;
      const socialGroup = card.querySelector('.doctor-links');
      if (socialGroup) {
        card.insertBefore(priceTag, socialGroup);
      } else {
        card.appendChild(priceTag);
      }
    }
  }

  doctorDataMap.set(doctorName, {
    name: doctorName,
    department: departmentTitle || '',
    specialty: specialtyText,
    price: priceValue || null
  });

  if (card.querySelector('.doctor-links')) {
    return;
  }

  // Create non-clickable social media logo displays
  const linkElements = socialPlatforms
    .map((platform) => {
      const logoSpan = document.createElement('span');
      logoSpan.classList.add('doctor-link', platform.className);
      logoSpan.setAttribute('aria-label', platform.label);
      logoSpan.setAttribute('title', platform.label);
      logoSpan.innerHTML = socialIcons[platform.key] || '';
      return logoSpan;
    });

  const linksContainer = document.createElement('div');
  linksContainer.className = 'doctor-links';
  linksContainer.setAttribute('aria-hidden', 'true');
  linkElements.forEach((logo) => linksContainer.appendChild(logo));
  card.appendChild(linksContainer);
});

if (doctorSelect) {
  Array.from(doctorSelect.options).forEach((option) => {
    const baseLabel = option.dataset.name || option.textContent.trim();
    if (!baseLabel) {
      return;
    }

    const optionName = baseLabel;
    const priceValue = doctorPricing[optionName];
    if (!priceValue) {
      return;
    }
    option.value = option.value || optionName;
    option.dataset.name = optionName;
    option.title = `Consultation Fee: ${formatFee(priceValue)}`;
    if (!option.dataset.price) {
      option.dataset.price = priceValue;
      option.textContent = `${optionName} — Consultation Fee: ${formatFee(priceValue)}`;
    }
  });

  const appointmentCatalog = document.getElementById('appointmentCatalog');
  const doctorButtons = new Map();
  const departmentCards = new Map();
  const doctorDepartments = new Map();

  const setTimeSlotsForDoctor = async (doctorName) => {
    if (!appointmentTimeSelect) {
      return;
    }

    appointmentTimeSelect.innerHTML = '';

    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = doctorName ? 'Loading available slots...' : 'Select a doctor first';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    appointmentTimeSelect.appendChild(placeholderOption);

    if (!doctorName) {
      appointmentTimeSelect.disabled = true;
      return;
    }

    // Get selected date
    const dateInput = document.querySelector('input[name="date"]');
    const selectedDate = dateInput ? dateInput.value : '';

    // Fetch booked appointments for this doctor and date
    let bookedSlots = [];
    if (selectedDate) {
      try {
        const response = await fetch(`${API_BASE}/appointments/booked-slots?doctor=${encodeURIComponent(doctorName)}&date=${selectedDate}`);
        const data = await response.json();
        if (response.ok && data.booked_slots) {
          bookedSlots = data.booked_slots;
        }
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      }
    }

    const slots = doctorAvailability[doctorName] || defaultTimeSlots;
    
    // Filter out booked slots
    const availableSlots = slots.filter(slot => !bookedSlots.includes(slot));
    
    if (availableSlots.length === 0) {
      placeholderOption.textContent = 'No available slots for this date';
      appointmentTimeSelect.disabled = true;
      return;
    }

    placeholderOption.textContent = 'Select Time Slot';
    
    availableSlots.forEach((slot) => {
      const option = document.createElement('option');
      option.value = slot;
      option.textContent = slot;
      appointmentTimeSelect.appendChild(option);
    });

    appointmentTimeSelect.disabled = false;
  };

  const updateActiveDoctor = (selectedName) => {
    setTimeSlotsForDoctor(selectedName);
    const activeDepartment = doctorDepartments.get(selectedName);
    const hasSelection = Boolean(selectedName && activeDepartment);

    departmentCards.forEach((card, departmentName) => {
      const isActiveDept = hasSelection && departmentName === activeDepartment;
      card.classList.toggle('is-hidden', !isActiveDept);
      card.classList.toggle('active', isActiveDept);
    });

    doctorButtons.forEach((button, name) => {
      const isActive = hasSelection && name === selectedName;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  if (appointmentCatalog) {
    const departmentEntries = Array.from(doctorSelect.querySelectorAll('optgroup'))
      .map((group) => {
        const deptName = group.label?.trim();
        const doctors = Array.from(group.querySelectorAll('option'))
          .map((option) => {
            const doctorName = option.dataset.name || option.value || option.textContent.trim();
            if (!doctorName || !doctorPricing[doctorName]) {
              return null;
            }

            const doctorMeta = doctorDataMap.get(doctorName) || {};
            return {
              name: doctorName,
              department: doctorMeta.department || deptName || '',
              specialty: doctorMeta.specialty || '',
              price: doctorPricing[doctorName]
            };
          })
          .filter(Boolean);

        if (!deptName || !doctors.length) {
          return null;
        }

        return { department: deptName, doctors };
      })
      .filter(Boolean);

    appointmentCatalog.innerHTML = '';

    departmentEntries.forEach((dept) => {
      const departmentCard = document.createElement('article');
      departmentCard.className = 'appointment-department';
      departmentCard.dataset.department = dept.department;

      const header = document.createElement('div');
      header.className = 'appointment-dept-header';

      const deptLabel = document.createElement('h3');
      deptLabel.className = 'dept-label';
      deptLabel.textContent = dept.department;

      const deptCount = document.createElement('span');
      deptCount.className = 'dept-count';
      const specialistLabel = dept.doctors.length === 1 ? 'specialist' : 'specialists';
      deptCount.textContent = `${dept.doctors.length} ${specialistLabel}`;

      header.appendChild(deptLabel);
      header.appendChild(deptCount);

      const doctorList = document.createElement('div');
      doctorList.className = 'appointment-doctor-list';

      dept.doctors.forEach((doctor) => {
        const doctorButton = document.createElement('button');
        doctorButton.type = 'button';
        doctorButton.className = 'appointment-doctor';
        doctorButton.dataset.name = doctor.name;
        doctorButton.dataset.price = doctor.price;
        doctorButton.setAttribute('aria-pressed', 'false');
        doctorButton.setAttribute('aria-label', `${doctor.name}${doctor.specialty ? `, ${doctor.specialty}` : ''}`);
        doctorButton.title = `${doctor.name} — ${doctor.specialty || 'Consultant'} • ${formatFee(doctor.price)}`;

        const labelContainer = document.createElement('span');
        labelContainer.className = 'doctor-label';

        const nameElement = document.createElement('span');
        nameElement.className = 'doctor-name';
        nameElement.textContent = doctor.name;
        labelContainer.appendChild(nameElement);

        if (doctor.specialty) {
          const specialtyElement = document.createElement('span');
          specialtyElement.className = 'doctor-specialty';
          specialtyElement.textContent = doctor.specialty;
          labelContainer.appendChild(specialtyElement);
        }

        const feeElement = document.createElement('span');
        feeElement.className = 'doctor-fee';
        feeElement.textContent = `Consultation Fee • ${formatFee(doctor.price)}`;

        doctorButton.appendChild(labelContainer);
        doctorButton.appendChild(feeElement);

        doctorButton.addEventListener('click', () => {
          doctorSelect.value = doctor.name;
          doctorSelect.dispatchEvent(new Event('change', { bubbles: true }));
          if (appointmentTimeSelect && !appointmentTimeSelect.disabled) {
            appointmentTimeSelect.focus();
          }
        });

        doctorButtons.set(doctor.name, doctorButton);
        doctorDepartments.set(doctor.name, dept.department);
        doctorList.appendChild(doctorButton);
      });

      departmentCard.appendChild(header);
      departmentCard.appendChild(doctorList);
      appointmentCatalog.appendChild(departmentCard);
      departmentCards.set(dept.department, departmentCard);
      departmentCard.classList.add('is-hidden');
    });
  }

  doctorSelect.addEventListener('change', () => {
    updateActiveDoctor(doctorSelect.value);
  });

  updateActiveDoctor(doctorSelect.value);
  
  // Add event listener for date changes to refresh available time slots
  const appointmentDateInput = document.querySelector('input[name="date"]');
  if (appointmentDateInput) {
    appointmentDateInput.addEventListener('change', () => {
      const selectedDoctor = doctorSelect.value;
      if (selectedDoctor) {
        setTimeSlotsForDoctor(selectedDoctor);
      }
    });
  }
}

// ===== Search Bar Functionality =====
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    // First, try to find and scroll to matching departments or doctors on the page
    let found = false;

    // Close all departments first
    document.querySelectorAll('.doctor-grid').forEach(grid => grid.classList.remove('active'));

    // Search in department titles
    const deptTitles = document.querySelectorAll('.dept-title');
    deptTitles.forEach(title => {
      if (title.textContent.toLowerCase().includes(query)) {
        const grid = title.nextElementSibling;
        grid.classList.add('active');
        title.closest('.department').scrollIntoView({ behavior: 'smooth' });
        found = true;
      }
    });

    // If not found in titles, search in doctor names
    if (!found) {
      const doctorCards = document.querySelectorAll('.doctor-card h3');
      doctorCards.forEach(h3 => {
        if (h3.textContent.toLowerCase().includes(query)) {
          const department = h3.closest('.department');
          const grid = department.querySelector('.doctor-grid');
          grid.classList.add('active');
          department.scrollIntoView({ behavior: 'smooth' });
          found = true;
        }
      });
    }

    if (!found) {
      alert('No matches found for: ' + query);
    }
  } else {
    alert('Please enter a search term.');
  }
});

// ===== Department Toggle Functionality =====
const deptTitles = document.querySelectorAll('.dept-title');

deptTitles.forEach(title => {
  title.addEventListener('click', () => {
    const grid = title.nextElementSibling;
    grid.classList.toggle('active');
  });
});

// (removed: quick-fill test helper for appointment form)

// ===== Simple Appointment Confirmation =====
document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    doctor: formData.get('doctor'),
    date: formData.get('date'),
    time: formData.get('time'),
    message: formData.get('message'),
    user_id: currentUser?.id || null
  };
  
  // Debug: Log user and appointment data
  console.log('Booking appointment with user:', currentUser);
  console.log('Appointment data:', data);

  const selectedDoctorMeta = doctorDataMap.get(data.doctor);
  if (selectedDoctorMeta && selectedDoctorMeta.department) {
    data.department = selectedDoctorMeta.department;
  }

  // Double-check if the time slot is still available before booking
  try {
    const checkResponse = await fetch(`${API_BASE}/appointments/booked-slots?doctor=${encodeURIComponent(data.doctor)}&date=${data.date}`);
    const checkData = await checkResponse.json();
    
    if (checkResponse.ok && checkData.booked_slots) {
      if (checkData.booked_slots.includes(data.time)) {
        alert('❌ Sorry, this time slot was just booked by another user. Please select a different time.');
        // Refresh time slots
        if (doctorSelect) {
          setTimeSlotsForDoctor(data.doctor);
        }
        return;
      }
    }
  } catch (error) {
    console.error('Error checking slot availability:', error);
  }

  try {
    const result = await apiFetch('/appointments', {
      method: 'POST',
      body: data
    });

    const successMessage = result?.message || 'Appointment booked successfully.';
    
    // Show success message
    alert(`✅ ${successMessage}`);
    
    // Reset form
    e.target.reset();
    if (doctorSelect) {
      doctorSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    // If user is logged in, refresh and show their appointments
    if (currentUser) {
      // Ensure the current user is persisted so other pages (my-appointments.html) can read it
      try {
        persistCurrentUser(currentUser);
        console.debug('Persisted current user after booking:', currentUser);
      } catch (err) {
        console.warn('Failed to persist user after booking:', err);
      }
      await refreshUserAppointments();
      
      // Scroll to appointments section to show the newly booked appointment
      const appointmentsSection = document.getElementById('appointmentsSection');
      if (appointmentsSection) {
        appointmentsSection.style.display = 'block';
        setTimeout(() => {
          appointmentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      // For non-logged in users, suggest they login to see appointments
      const shouldLogin = confirm('Tip: Login to view and manage all your appointments!\n\nWould you like to login now?');
      if (shouldLogin) {
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
          loginLink.click();
        }
      }
    }
  } catch (error) {
    alert(`❌ ${resolveErrorMessage(error, 'Failed to book appointment. Please try again.')}`);
    console.error('Appointment error:', error);
  }
});

// ===== Blog Modal Functionality =====
const blogCards = document.querySelectorAll('.blog-card');

const blogArticles = {
  '3 Tips for a Healthy Heart': {
    content: `
      <p>Maintaining a healthy heart is essential for overall well-being. Here are three key tips to keep your cardiovascular system strong:</p>
      <ol style="margin: 20px 0; padding-left: 25px; line-height: 1.8;">
        <li><strong>Stay Physically Active:</strong> Aim for at least 150 minutes of moderate aerobic activity per week. Regular exercise strengthens your heart muscle, improves circulation, and helps maintain healthy blood pressure.</li>
        <li><strong>Eat a Heart-Healthy Diet:</strong> Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats like omega-3s. Limit saturated fats, trans fats, sodium, and added sugars to reduce cholesterol and protect your arteries.</li>
        <li><strong>Manage Stress & Get Quality Sleep:</strong> Chronic stress and poor sleep both increase heart disease risk. Practice relaxation techniques like meditation or yoga, and aim for 7-9 hours of restful sleep each night.</li>
      </ol>
      <p><strong>Remember:</strong> Schedule regular check-ups with your doctor to monitor blood pressure, cholesterol, and blood sugar levels. Early detection saves lives.</p>
      <p style="margin-top: 20px; font-style: italic; color: #666;">Consult with our cardiology specialists at City Care Hospital for personalized heart health assessments and treatment plans.</p>
    `
  }
};

blogCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const mediaDiv = card.querySelector('.blog-media');
    const img = mediaDiv ? mediaDiv.style.backgroundImage.replace(/url\(['"]?(.+?)['"]?\)/i, '$1') : '';
    const title = card.querySelector('h3').textContent;
    const excerpt = card.querySelector('p').textContent;

    const modalImage = document.getElementById('blogModalImage');
    if (modalImage) {
      modalImage.src = img || '';
    }
    
    document.getElementById('blogModalTitle').textContent = title;
    
    const article = blogArticles[title];
    if (article && article.content) {
      document.getElementById('blogModalContent').innerHTML = article.content;
    } else {
      document.getElementById('blogModalContent').textContent = excerpt + ' This is a placeholder for the full article content. In a real application, this would load the complete article from a database or CMS.';
    }

    document.getElementById('blogModal').style.display = 'block';
  });
});

const blogModal = document.getElementById('blogModal');
const blogClose = document.getElementById('blogClose');

if (blogClose) {
  blogClose.addEventListener('click', () => {
    blogModal.style.display = 'none';
  });
}

// ===== User Authentication =====
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginFormEl = document.getElementById('loginForm');
const registerFormEl = document.getElementById('registerForm');
const loginCloseBtn = document.getElementById('loginClose');
const registerCloseBtn = document.getElementById('registerClose');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginPromptLink = document.getElementById('loginPromptLink');
const profileLogoutBtn = document.getElementById('profileLogoutBtn');
const loginLink = document.getElementById('loginLink');
const profileSection = document.querySelector('.profile');
const userInfoSection = document.getElementById('userInfo');
const loginPromptSection = document.getElementById('loginPrompt');
const appointmentsSection = document.getElementById('appointmentsSection');
const userNameField = document.getElementById('userName');
const userEmailField = document.getElementById('userEmail');
const userPhoneField = document.getElementById('userPhone');
const loadAppointmentsBtn = document.getElementById('loadAppointments');
const appointmentsList = document.getElementById('appointmentsList');
const paymentModal = document.getElementById('paymentModal');
const paymentCloseBtn = document.getElementById('paymentClose');
const paymentForm = document.getElementById('paymentForm');
const payNowBtn = document.getElementById('payNowBtn');
const paymentMethodRadios = paymentForm ? paymentForm.querySelectorAll('input[name="paymentMethod"]') : [];
const cardFieldsGroup = paymentForm ? paymentForm.querySelector('.card-fields') : null;
const mobileFieldsGroup = paymentForm ? paymentForm.querySelector('.mobile-fields') : null;
const methodOptions = paymentForm ? paymentForm.querySelectorAll('.method-option') : [];

let currentUser = null;
const resolveErrorMessage = (error, fallback) => {
  if (!error) {
    return fallback;
  }
  if (typeof error === 'string' && error.trim()) {
    return error;
  }
  if (error.payload && typeof error.payload.error === 'string') {
    return error.payload.error;
  }
  if (error.message) {
    return error.message;
  }
  return fallback;
};

const refreshUserAppointments = async () => {
  // If currentUser is not set in memory, try to load from persistent storage
  if (!currentUser) {
    try {
      const stored = loadStoredUser ? loadStoredUser() : null;
      if (stored) {
        currentUser = stored;
        console.debug('Loaded currentUser from storage in refreshUserAppointments:', currentUser);
      }
    } catch (err) {
      console.warn('Error loading stored user in refreshUserAppointments:', err);
    }
  }

  if (!currentUser || !currentUser.id) {
    if (appointmentsList) {
      appointmentsList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">Please login to view your appointments.</p>';
    }
    return;
  }
  
  // Show loading message
  if (appointmentsList) {
    appointmentsList.innerHTML = '<p style="color: #667eea; text-align: center; padding: 20px;">⏳ Loading your appointments...</p>';
  }
  
  try {
    console.debug('Fetching appointments for user:', currentUser.id, currentUser.email);
    const result = await apiFetch(`/appointments?user_id=${encodeURIComponent(currentUser.id)}`, { method: 'GET' });
    const appointmentsRaw = Array.isArray(result?.appointments) ? result.appointments : Array.isArray(result) ? result : [];
    console.debug('Appointments fetch result (raw):', result);
    const appointments = appointmentsRaw.map((apt) => {
      const doctor = apt.doctor;
      const doctorMeta = doctorDataMap.get(doctor) || {};
      return {
        id: apt.id,
        doctor,
        department: apt.department || doctorMeta.department || '',
        date: apt.appointment_date || apt.date || apt.appointmentDate || '',
        time: apt.appointment_time || apt.time || apt.appointmentTime || '',
        message: apt.message || ''
      };
    });
    // If no appointments were returned, show a helpful UI debug panel on the dedicated page
    if (appointments.length === 0) {
      if (appointmentsList) {
        // Only show debug details on the standalone My Appointments page — hide in the profile section
        const isMyAppointmentsPage = window.location.pathname && window.location.pathname.toLowerCase().includes('my-appointments');
        if (isMyAppointmentsPage) {
          appointmentsList.innerHTML = `
            <div style="padding:16px; background:#fff; border:1px solid #eee; border-radius:8px;">
              <h4 style="margin:0 0 8px 0; color:#667eea;">No appointments found — debug</h4>
              <p style="color:#666; margin:0 0 8px 0;">If you just booked an appointment, verify the stored user and the API response below.</p>
              <pre style="white-space:pre-wrap; font-size:13px; color:#222; background:#f7f7f7; padding:12px; border-radius:6px;">Stored user:\n${JSON.stringify(currentUser, null, 2)}\n\nAPI response:\n${JSON.stringify(result, null, 2)}</pre>
            </div>
          `;
        } else {
          // Profile section: show a concise friendly message only
          appointmentsList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No appointments found. Book your first appointment or check under "My Appointments" for detailed debug info.</p>';
        }
      }
      return;
    }
    displayAppointments(appointments);
  } catch (error) {
    if (error.status !== 401) {
      console.error('Appointments fetch error:', error);
      if (appointmentsList) {
        appointmentsList.innerHTML = '<p style="color: #dc3545; text-align: center; padding: 20px;">❌ Error loading appointments. Please try again.</p>';
      }
    }
  }
};

const showProfileSection = () => {
  if (profileSection) {
    profileSection.style.display = 'block';
    profileSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const openLoginModal = () => {
  if (loginModal) {
    loginModal.style.display = 'block';
  }
};

const closeLoginModal = () => {
  if (loginModal) {
    loginModal.style.display = 'none';
  }
};

const openRegisterModal = () => {
  if (registerModal) {
    registerModal.style.display = 'block';
  }
};

const closeRegisterModal = () => {
  if (registerModal) {
    registerModal.style.display = 'none';
  }
};

const openPaymentModal = () => {
  if (paymentModal) {
    paymentModal.style.display = 'block';
  }
};

const closePaymentModal = () => {
  if (paymentModal) {
    paymentModal.style.display = 'none';
  }
};

if (loginLink) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentUser) {
      showProfileSection();
    } else {
      openLoginModal();
    }
  });
}

if (loginCloseBtn) {
  loginCloseBtn.addEventListener('click', closeLoginModal);
}

if (registerCloseBtn) {
  registerCloseBtn.addEventListener('click', closeRegisterModal);
}

if (paymentCloseBtn) {
  paymentCloseBtn.addEventListener('click', closePaymentModal);
}

if (showRegisterLink) {
  showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeLoginModal();
    openRegisterModal();
  });
}

if (showLoginLink) {
  showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeRegisterModal();
    openLoginModal();
  });
}

if (loginPromptLink) {
  loginPromptLink.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginModal();
  });
}

if (profileLogoutBtn) {
  profileLogoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logoutUser();
  });
}

if (payNowBtn) {
  payNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPaymentModal();
  });
}

// Fallback: Global delegated handler to ensure logout works from any dynamically-added button/link
document.addEventListener('click', (e) => {
  const navBtn = e.target.closest('#navLogoutBtn');
  const profileBtn = e.target.closest('#profileLogoutBtn');
  if (navBtn || profileBtn) {
    e.preventDefault();
    logoutUser();
  }
});

const togglePaymentFields = (method) => {
  if (!paymentForm) {
    return;
  }

  const setGroupState = (groupEl, enabled) => {
    if (!groupEl) {
      return;
    }
    groupEl.hidden = !enabled;
    groupEl.querySelectorAll('input, select').forEach((control) => {
      control.disabled = !enabled;
      if (!enabled) {
        if (control.tagName === 'SELECT') {
          control.selectedIndex = 0;
        } else {
          control.value = '';
        }
      }
    });
  };

  setGroupState(cardFieldsGroup, method === 'card');
  setGroupState(mobileFieldsGroup, method === 'mobile');

  methodOptions.forEach((option) => {
    const optionRadio = option.querySelector('input[type="radio"]');
    if (!optionRadio) {
      return;
    }
    option.classList.toggle('active', optionRadio.value === method);
  });
};

if (paymentMethodRadios.length) {
  paymentMethodRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      togglePaymentFields(event.target.value);
    });
  });

  const initialMethod = Array.from(paymentMethodRadios).find((radio) => radio.checked)?.value || 'card';
  togglePaymentFields(initialMethod);
}

// (removed: quick-fill buttons for login/register forms)

if (loginFormEl) {
  loginFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = (formData.get('email') || '').trim();
    const password = (formData.get('password') || '').trim();

    if (!email || !password) {
      alert('❌ Please provide both email and password.');
      return;
    }

    try {
      const result = await apiFetch('/login', {
        method: 'POST',
        body: { email, password }
      });

      alert(`✅ ${result?.message || 'Login successful.'}`);
      closeLoginModal();
      // Store the full user object (result contains user data directly)
      if (result && result.id) {
        updateNavbarForUser(result);
      } else if (result?.user) {
        updateNavbarForUser(result.user);
      }
      e.target.reset();
      showProfileSection();
      await refreshUserAppointments();
    } catch (error) {
      alert(`❌ ${resolveErrorMessage(error, 'Login failed. Please try again.')}`);
      console.error('Login error:', error);
    }
  });
}

if (registerFormEl) {
  registerFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const password = (formData.get('password') || '').trim();
    const phone = (formData.get('phone') || '').trim();

    if (!name || !email || !password || !phone) {
      alert('❌ Please fill in all registration fields.');
      return;
    }

    try {
      const result = await apiFetch('/register', {
        method: 'POST',
        body: { name, email, password, phone }
      });

      alert(`✅ ${result?.message || 'Registration successful.'}`);
      closeRegisterModal();
      // Store the full user object (result contains user data directly)
      if (result && result.id) {
        updateNavbarForUser(result);
      } else if (result?.user) {
        updateNavbarForUser(result.user);
      }
      e.target.reset();
      showProfileSection();
    } catch (error) {
      alert(`❌ ${resolveErrorMessage(error, 'Registration failed. Please try again.')}`);
      console.error('Registration error:', error);
    }
  });
}

if (paymentForm) {
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('payerName') || 'Guest';
    const amountValue = parseFloat(formData.get('amount'));
    const amount = Number.isFinite(amountValue) ? amountValue.toFixed(2) : formData.get('amount');
    const methodSelected = formData.get('paymentMethod') || 'card';
    let methodSummary = 'Card Payment';

    if (methodSelected === 'mobile') {
    const partnerSelect = paymentForm.querySelector('select[name="mobileProvider"]');
    const partnerName = partnerSelect && partnerSelect.selectedIndex > -1 ? partnerSelect.options[partnerSelect.selectedIndex].text : '';
    methodSummary = `Mobile Payment${partnerName ? ` - ${partnerName}` : ''}`;
    }

  alert(`✅ Payment processed (demo). Method: ${methodSummary}. Thank you, ${name}! Amount: BDT ${amount}`);
    e.target.reset();
    closePaymentModal();
    const defaultRadio = Array.from(paymentMethodRadios).find((radio) => radio.value === 'card');
    if (defaultRadio) {
      defaultRadio.checked = true;
    }
    togglePaymentFields('card');
  });
}

function updateNavbarForUser(user) {
  currentUser = user;
  persistCurrentUser(user);
  if (loginLink) {
    // Change navbar link to "My Appointments" with dropdown menu
    // Use a safe parent lookup: prefer the direct parent, then closest <li>, then fallback to the link itself
    const parentEl = loginLink.parentElement || loginLink.closest('li') || loginLink;
    if (parentEl) {
      parentEl.innerHTML = `
        <a href="#" id="userMenuToggle">${user.name} ▼</a>
        <div id="userDropdown" class="user-dropdown" style="display: none;">
          <a href="my-appointments.html">📋 My Appointments</a>
          <a href="#profile">👤 Profile</a>
          <a href="#" id="navLogoutBtn">🚪 Logout</a>
        </div>
      `;
    } else {
      // As a last resort replace the link node itself
      try {
        loginLink.outerHTML = `<a href="#" id="userMenuToggle">${user.name} ▼</a>`;
      } catch (e) {
        // ignore - DOM may be in unexpected shape
      }
    }
    
    // Add dropdown toggle functionality
    const userMenuToggle = document.getElementById('userMenuToggle');
    const userDropdown = document.getElementById('userDropdown');
  const navLogoutBtn = document.getElementById('navLogoutBtn');
    
    if (userMenuToggle && userDropdown) {
      userMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#userMenuToggle') && !e.target.closest('#userDropdown')) {
          userDropdown.style.display = 'none';
        }
      });
    }
    
    if (navLogoutBtn) {
      navLogoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logoutUser();
      });
    }
  }
  if (profileSection) {
    profileSection.style.display = 'block';
    // Scroll to profile section after login
    setTimeout(() => {
      profileSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
  if (userInfoSection) {
    userInfoSection.style.display = 'block';
  }
  if (loginPromptSection) {
    loginPromptSection.style.display = 'none';
  }
  if (appointmentsSection) {
    appointmentsSection.style.display = 'block';
  }
  if (userNameField) {
    userNameField.textContent = user.name;
  }
  if (userEmailField) {
    userEmailField.textContent = user.email || '—';
  }
  if (userPhoneField) {
    userPhoneField.textContent = user.phone || '—';
  }
  // Automatically load appointments when user logs in
  refreshUserAppointments();
}

async function logoutUser() {
  try {
    await apiFetch('/logout', { method: 'POST' });
  } catch (error) {
    console.error('Logout error:', error);
  }

  // Close any open user dropdown
  const userDropdownEl = document.getElementById('userDropdown');
  if (userDropdownEl) {
    userDropdownEl.style.display = 'none';
  }

  // Clear user data
  currentUser = null;
  clearStoredUser();
  
  // Restore navbar to show Login button
  if (loginLink) {
    const parentEl = loginLink.parentElement || loginLink.closest('li') || loginLink;
    // Find the li that contains the user menu and replace it with login link
    const userMenuItem = document.querySelector('#userMenuToggle');
    if (userMenuItem && userMenuItem.parentElement) {
      userMenuItem.parentElement.innerHTML = '<a href="#" id="loginLink">Login</a>';
      // Re-attach the login modal event
      const newLoginLink = document.getElementById('loginLink');
      if (newLoginLink) {
        newLoginLink.addEventListener('click', (e) => {
          e.preventDefault();
          openLoginModal();
        });
      }
    } else if (parentEl) {
      // Put login link into the parent element
      parentEl.innerHTML = '<a href="#" id="loginLink">Login</a>';
      const newLoginLink = document.getElementById('loginLink');
      if (newLoginLink) {
        newLoginLink.addEventListener('click', (e) => {
          e.preventDefault();
          openLoginModal();
        });
      }
    } else {
      // Fallback: just update the text
      loginLink.textContent = 'Login';
      loginLink.href = '#';
      loginLink.onclick = (e) => {
        e.preventDefault();
        openLoginModal();
      };
    }
  }
  
  // Hide profile and appointments sections
  if (profileSection) {
    profileSection.style.display = 'none';
  }
  if (userInfoSection) {
    userInfoSection.style.display = 'none';
  }
  if (loginPromptSection) {
    loginPromptSection.style.display = 'block';
  }
  if (appointmentsSection) {
    appointmentsSection.style.display = 'none';
  }
  if (appointmentsList) {
    appointmentsList.innerHTML = '';
  }
  
  // Show success message and redirect to home
  alert('✅ You have been logged out successfully!');
  
  // Redirect to home page (scroll to top and show home section)
  window.location.hash = '';
  window.location.hash = 'home';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const initializeUserSession = () => {
  const storedUser = loadStoredUser();
  if (storedUser) {
    updateNavbarForUser(storedUser);
  }
};

if (loadAppointmentsBtn) {
  loadAppointmentsBtn.addEventListener('click', async () => {
    if (!currentUser) {
      alert('Please login to view your appointments.');
      openLoginModal();
      return;
    }

    // Show loading state
    const originalText = loadAppointmentsBtn.textContent;
    loadAppointmentsBtn.textContent = 'Loading...';
    loadAppointmentsBtn.disabled = true;
    
    await refreshUserAppointments();
    
    // Reset button state
    loadAppointmentsBtn.textContent = originalText;
    loadAppointmentsBtn.disabled = false;
  });
}

function displayAppointments(appointments) {
  if (!appointmentsList) return;
  const list = Array.isArray(appointments) ? appointments : [];
  if (list.length === 0) {
    appointmentsList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No appointments found. Book your first appointment!</p>';
    return;
  }
  appointmentsList.innerHTML = `
    <div style="margin-top: 20px;">
      <p style="color: #667eea; font-weight: bold; margin-bottom: 15px;">Found ${list.length} appointment${list.length > 1 ? 's' : ''}</p>
      ${list.map(apt => `
        <div class="appointment-item" style="background: #f8f9fa; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
          <h4 style="color: #667eea; margin-bottom: 10px;">🏥 ${apt.doctor}</h4>
          ${apt.department ? `<p><strong>Department:</strong> ${apt.department}</p>` : ''}
          <p><strong>📅 Date:</strong> ${apt.date || '—'}</p>
          <p><strong>🕐 Time:</strong> ${apt.time || '—'}</p>
          ${apt.message ? `<p><strong>📝 Message:</strong> ${apt.message}</p>` : ''}
          <p style="color: #999; font-size: 12px; margin-top: 10px;"><strong>ID:</strong> #${apt.id || '—'}</p>
        </div>
      `).join('')}
    </div>
  `;
}

initializeUserSession();

window.addEventListener('click', (event) => {
  if (event.target === blogModal) {
    blogModal.style.display = 'none';
  }
  if (loginModal && event.target === loginModal) {
    closeLoginModal();
  }
  if (registerModal && event.target === registerModal) {
    closeRegisterModal();
  }
  if (paymentModal && event.target === paymentModal) {
    closePaymentModal();
  }
});
