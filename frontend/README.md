# 📌 Student Task Manager – Full Stack Project

## 📖 Project Overview

**Student Task Manager** is a full-stack web application built using **React (Vite)**, **Node.js**, **Express**, and **MongoDB**.  
It allows users to manage daily tasks by creating, updating, deleting, and tracking task completion with filtering support.

The project follows proper **UX flows**, **REST API design**, and **deployment best practices**, making it suitable for real-world usage and internship evaluation.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6)
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## ✅ Prerequisites

Make sure you have the following installed before running the project:

- **Node.js (LTS v18 or v20)**  
  👉 https://nodejs.org
- **npm**
- **Git**
- **MongoDB Atlas account** (free tier)

Optional but recommended:
- Postman / Thunder Client (for API testing)

---

## 📂 Project Structure

```
Student-Task-Manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Keyush-15/Student-Task-Manager.git
cd Student-Task-Manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Start backend server:
```bash
node index.js
```

Backend will run on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## 🔄 Application User Flow (UX)

The application follows the below user flow:

1. User opens the homepage
2. If no tasks exist, an empty state message with CTA is shown
3. User clicks **Add Task**
4. Fills task details and submits
5. Frontend sends `POST /api/tasks`
6. Task is saved in MongoDB and UI updates
7. User can:
   - Mark task complete / incomplete
   - Edit task using modal
   - Delete task
8. User can filter tasks:
   - All
   - Pending
   - Completed

---

## ✨ Features Implemented

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Edit tasks using modal
- ✅ Delete tasks
- ✅ Mark tasks as completed
- ✅ Filter tasks (All / Pending / Completed)
- ✅ Empty state UI
- ✅ Responsive layout
- ✅ RESTful API design
- ✅ MongoDB data persistence
- ✅ Environment variable based configuration
- ✅ Full deployment on cloud platforms

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Fetch tasks |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

---

## 🚀 Deployment Details

### Backend (Render)
- Root Directory: `backend`
- Start Command: `node index.js`
- Environment Variables:
  - `MONGO_URI`
  - `PORT`

### Frontend (Vercel)
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable:
  - `VITE_API_URL` (Render backend URL)

---

## 🧪 Testing

- Backend APIs tested using **Postman**
- Manual UI testing performed for all user flows
- CRUD operations verified both locally and after deployment

---

## 🔮 Future Enhancements

- 🔐 User authentication (JWT login/signup)
- 👥 Multi-user task management
- ⏰ Task reminders & notifications
- 🏷 Task categories / labels
- 📱 Improved mobile UI
- 🧪 Automated unit & integration tests
- 📊 Analytics dashboard
- 🌙 Dark mode support

---

## 📌 Learning Outcomes

- Built a complete full-stack application
- Understood REST APIs and MongoDB integration
- Learned environment variable management
- Practiced cloud deployment (Vercel & Render)
- Implemented real-world UX flows

---

## 👤 Author

**Keyush Kothari**  
GitHub: https://github.com/Keyush-15

---

## ✅ Final Notes

This project demonstrates a complete full-stack workflow from development to deployment and is suitable for internship evaluation, portfolio showcase, and interview discussion.

