# Expense Tracker

## 📌 Overview

Expense Tracker is a web application that helps users efficiently track their expenses and manage their budget. The app provides a user-friendly interface for adding, viewing, and analyzing expenses through visual graphs.

## 🚀 Features

- **User Authentication**: Signup & Login using JWT-based authentication
- **Expense Management**: Add, edit, and delete expenses
- **Graphical Insights**: Visual representation of expenses using charts
- **Secure Storage**: User data is securely stored
- **Responsive UI**: Mobile-friendly and optimized UI

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **State Management**: Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT & Cookies
- **Deployment**: Vercel/Netlify (Frontend), Render/Heroku (Backend)

## 📂 Project Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/akhilesh-bisht/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Install dependencies

#### For frontend

```sh
cd frontend
npm install
```

#### For backend

```sh
cd backend
npm install
```

### 3️⃣ Create a `.env` file in the backend directory

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Run the application

#### Start backend server

```sh
cd backend
npm start
```

#### Start frontend

```sh
cd frontend
npm run dev
```

### 5️⃣ Open in browser

Go to `http://localhost:5173`

## 🔗 API Endpoints

### **User Authentication**

- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### **Categories**

- `POST /api/categories` - Create a new category
- `GET /api/categories` - Get all categories

### **Transactions**

- `POST /api/transaction` - Create a new transaction
- `GET /api/transaction` - Get all transactions
- `DELETE /api/transaction` - Delete a transaction

### **Labels**

- `GET /api/labels` - Get all labels

## 🚀 Deployment

- **Frontend** deployed on: [Netlify/Vercel](#)
- **Backend** deployed on: [Render/Heroku](#)

## 📧 Contact

- **Developer**: Akhilesh Bisht
- **Portfolio**: [akhileshbisht.netlify.app](https://akhileshbisht.netlify.app/)
- **GitHub**: [@akhilesh-bisht](https://github.com/akhilesh-bisht)
- **Email**: akhileshbisht2020@gmail.com
