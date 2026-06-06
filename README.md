# AI Hostel Maintenance Prioritization Dashboard

# 🧠 Problem Statement

Hostel management systems in many colleges are still manual or poorly optimized, leading to:
- Delayed complaint resolution
- No proper prioritization of issues
- Lack of transparency between students and hostel administration
- Difficulty tracking maintenance status
- Poor communication between students and staff

As a result, critical issues like electrical failures or water leaks often get delayed, affecting student life and safety.

## 💡 Solution Overview

The AI Hostel Maintenance Prioritization Dashboard is a smart full-stack web application that allows students to:
- Submit hostel maintenance complaints easily
- Automatically categorize complaints (Electrical, Plumbing, etc.)
- Use an AI-based priority scoring system to highlight urgent safety issues
- Track complaint status in real-time
- Separate, role-based dashboards for Students and Admins

## 🎨 UI/UX Philosophy

We designed this platform with a **"Sustainable-Tech"** vision, specifically for the *AI for Impact* challenge:
- **Eco-Impact Theme:** A fresh, clean color palette (Emerald/Slate) to evoke a sense of sustainability, community, and clarity.
- **Glassmorphism:** Implemented premium glass-blur effects to make data-heavy dashboards feel lightweight and approachable.
- **Cinematic Animations:** Powered by Framer Motion, featuring spring-based interactions that provide immediate tactile feedback when students submit reports or admins manage queues.

## 🔥 Key Features

- **⚡ AI-based complaint prioritization:** Automated logic to score urgency.
- **📊 Admin Analytics:** Interactive charts for warden operations.
- **🧾 Complaint tracking:** Real-time visibility into request lifecycles.
- **🔐 Secure authentication:** JWT-based login with role-based routing.
- **🎨 Modern UI:** A responsive, high-contrast, accessible design system.

## 🏗️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion, Axios  
- **Backend:** Node.js, Express.js, JWT Authentication, bcrypt.js  
- **Database:** MongoDB (Mongoose)

## 🔌 APIs Used (Backend REST API)

- **POST** `/api/auth/register` → Register new user
- **POST** `/api/auth/login` → Login user & get JWT token
- **POST** `/api/complaints` → Create a new complaint (Protected)
- **GET** `/api/complaints` → Get all complaints (Protected)

*Authorization: `Bearer <token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjNkMTMwMjI3YzNmYjAwYzcwNmNhNSIsImlhdCI6MTc4MDczNzU0MywiZXhwIjoxNzgxMzQyMzQzfQ.J6E6vMTJ5WBbHQSGcuIU5KVXePwpCxx4BEaOE7OQD8c">`*

## 🛠️ Setup Instructions

1. **Clone:** `git clone https://github.com/your-username/ai-hostel-dashboard.git`
2. **Backend:** `cd backend`, `npm install`, create `.env` (PORT, MONGO_URI, JWT_SECRET), then `npm start`.
3. **Frontend:** `cd frontend`, `npm install`, `npm run dev`.
4. **Connect:** Ensure `src/api.js` is set to `http://localhost:5000/api`.

## 👨‍💻 Team Contributions

- **[Mohd Raihan Patel]:** Frontend & UI/UX Lead - Designed the landing page and dashboard interfaces, implemented the 'Eco-Impact' design system, integrated Framer Motion animations, and finalized the frontend authentication flow.
- **[Tanisha Rathore]:** Backend Lead - Built the REST API, managed the MongoDB schemas, developed the complaint prioritization logic, and configured JWT authentication.

## 🎯 Future Improvements

- AI-based complaint classification (OpenAI/Gemini integration)
- Real-time push notifications
- Mobile app version
- Advanced analytics dashboard

## ⭐ Result

✔ Faster complaint resolution  
✔ Smart AI-driven prioritization  
✔ Transparent hostel management  
✔ Better student experience  

---
*Developed as a Hackathon-Level Full Stack Project for AI for Impact 2.0*
