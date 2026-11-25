const scheduleData = [
  { code: "IT 301", subject: "Web Systems & Technologies", days: "Mon / Wed", time: "09:00 AM - 10:30 AM", room: "Lab 2", instructor: "Prof. Santos" },
  { code: "IT 302", subject: "Information Assurance & Security", days: "Mon / Wed", time: "01:00 PM - 02:30 PM", room: "Room 304", instructor: "Prof. Reyes" },
  { code: "IT 303", subject: "Networking 2", days: "Tue / Thu", time: "10:30 AM - 12:00 PM", room: "NetLab 1", instructor: "Engr. Cruz" },
  { code: "IT 304", subject: "Database Management Systems", days: "Tue / Thu", time: "02:00 PM - 03:30 PM", room: "Lab 1", instructor: "Prof. Mendoza" }
];

const gradesData = [
  { code: "IT 301", subject: "Web Systems & Technologies", units: 3, midterm: "1.25", final: "1.25", remarks: "Passed" },
  { code: "IT 302", subject: "Information Assurance & Security", units: 3, midterm: "1.50", final: "1.25", remarks: "Passed" },
  { code: "IT 303", subject: "Networking 2", units: 3, midterm: "1.75", final: "1.50", remarks: "Passed" },
  { code: "IT 304", subject: "Database Management Systems", units: 3, midterm: "1.25", final: "1.00", remarks: "Passed" }
];

const announcementsData = [
  { title: "Midterm Examination Schedule Released", date: "Nov 22, 2026", body: "Please check your respective department bulletin boards and class schedules for room assignments." },
  { title: "IT Department Hackathon Registration", date: "Nov 18, 2026", body: "Form a team of 3-4 students and register before Friday to join the annual coding challenge." },
  { title: "Library System Maintenance", date: "Nov 15, 2026", body: "Online journal access will be temporarily unavailable this Saturday from 1:00 AM to 5:00 AM." }
];

// Navigation switching
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content-section");
const pageTitle = document.getElementById("page-title");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    btn.classList.add("active");
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
    pageTitle.textContent = btn.textContent;
  });
});

// Populate Dashboard
const dashClasses = document.getElementById("dashboard-classes");
scheduleData.slice(0, 3).forEach(item => {
  dashClasses.innerHTML += `<li><strong>${item.code}</strong> - ${item.subject} <br><small class="muted">${item.days} • ${item.time} (${item.room})</small></li>`;
});

const dashAnnouncements = document.getElementById("dashboard-announcements");
announcementsData.slice(0, 2).forEach(item => {
  dashAnnouncements.innerHTML += `<li><strong>${item.title}</strong> <br><small class="muted">${item.date}</small></li>`;
});