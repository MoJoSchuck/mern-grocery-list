# 🥑 MERN Grocery List

A modern full-stack note-taking app built with the MERN stack (MongoDB, Express, React, Node.js).  
Create, update, and delete personal items in a clean and responsive UI.

---

## 🚀 Features

- ✍️ Create, edit, and delete items
- 📅 Automatic timestamp for each item
- 💡 Clean design using Tailwind CSS & DaisyUI
- ⚡ Instant feedback using toast messages (`react-hot-toast`)
- 📦 Frontend and backend are cleanly separated (Vite + Express)
- 🌐 Deployed on [Render](https://render.com) with MongoDB Atlas

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express, MongoDB (Atlas)
- **Tools**: Axios, React Router, Lucide Icons, Dotenv, ESLint
- **Deployment**: Render (Full-stack setup)

---

## 🧾 .env Configuration

### Backend (`/backend`)

```env
MONGO_URI=<your_mongo_uri>
NODE_ENV=development
```

## Optional: For rate limiting (if used)
```env
UPSTASH_REDIS_REST_URL=<your_upstash_url>
UPSTASH_REDIS_REST_TOKEN=<your_upstash_token>
```

## ▶️ Run Locally

### Start the backend:
```bash
cd backend
npm install
npm run dev
```
### Start the frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🌍 Production Deployment (optional)
### From the root directory (mern-grocery-list):
```bash
# Install frontend & backend and build frontend for production
npm run build

# Start backend and serve the production frontend
npm start
```

## 📂 Project Structure
```bash
mern-thinkboard/
├── backend/      # Node.js + Express + MongoDB API
├── frontend/     # Vite + React frontend UI
├── .gitignore
├── package.json  # Root scripts for deployment
```

## ✅ Ideas

- [ ] Add user authentication (e.g. JWT)

## 📸 Preview
<img width="1277" height="682" src="https://github.com/user-attachments/assets/e63e8e1a-f0f5-4680-a63b-c48cac0e80cb" />

## 📄 License

This project is licensed under the MIT License.
