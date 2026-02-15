# 🩺 Diabetes Prediction System (Full-Stack ML)

A full-stack Machine Learning web application that predicts whether a person is diabetic based on health parameters.  

Built using **React + Flask + MongoDB Atlas + Render + Vercel**.

---

## 🌐 Live Deployment

| Component | Platform | Live URL |
|------------|----------|----------|
| 💻 Frontend (React) | Vercel | https://diabetes-web-application.vercel.app/ |
| ⚙️ Backend (Flask API) | Render | https://diabetes-backend-flask.onrender.com |
| 🗄️ Database | MongoDB Atlas | Cloud Hosted |

---

# 🏗️ System Architecture

React Frontend (Vercel)
│
▼
Flask Backend API (Render)
│
▼
MongoDB Atlas (Cloud Database)
│
▼
ML Model (Joblib - Diabetes Prediction)


---

# 🔍 Features

- ✅ Real-time diabetes prediction
- ✅ Clean and responsive UI (React + Tailwind)
- ✅ REST API using Flask
- ✅ MongoDB Atlas cloud database integration
- ✅ Prediction history stored in database
- ✅ Deployed on Render & Vercel
- ✅ CORS enabled for secure communication
- ✅ Fully production ready

---

# 🧠 How It Works

1. User enters health details:
   - Age
   - BMI
   - HbA1c Level
   - Blood Glucose Level
   - Hypertension
   - Heart Disease
   - Smoking History

2. React frontend sends data to Flask backend.

3. Flask:
   - Loads trained ML model (`diabetes_model.pkl`)
   - Predicts diabetes result
   - Stores record in MongoDB Atlas
   - Returns result to frontend

4. Frontend displays:
   - **Diabetic**
   - **Not Diabetic**

---

# 🧮 Model Details

- Algorithm: Random Forest / Ensemble Model
- Dataset: Diabetes Prediction Dataset
- Focus: Improved minority class performance
- Techniques:
  - Class balancing
  - Hyperparameter tuning
  - Threshold optimization

---

# 🛠 Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- Fetch API
- Deployed on Vercel

### 🔹 Backend
- Flask
- Flask-CORS
- Gunicorn
- Joblib
- Pandas
- PyMongo
- Deployed on Render

### 🔹 Database
- MongoDB Atlas (Cloud NoSQL Database)

---

# 📁 Repository Structure

## 🔹 Backend Repo
https://github.com/Ashish094562/Diabetes-Backend-Flask

Diabetes-Backend-Flask/
│
├── app.py
├── requirements.txt
├── diabetes_model.pkl
└── README.md


## 🔹 Frontend Repo
(Your React repository)

---

# 🚀 Local Setup Guide

## 1️⃣ Clone Backend

```bash
git clone https://github.com/Ashish094562/Diabetes-Backend-Flask.git
cd Diabetes-Backend-Flask
```
## 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
## 3️⃣ Set Environment Variable
### Create .env file:
```bash
MONGO_URI=your_mongodb_atlas_connection_string
```
### Or export in terminal:
```bash
export MONGO_URI=your_uri
```
## 4️⃣ Run Backend
```bash
python app.py
```
### Runs at:
```bash
http://localhost:10000

```
## 5️⃣ Run Frontend
```bash
npm install
npm run dev
```
## 🔐 MongoDB Atlas Setup

1. Create cluster
2. Create database user
3. Network Access → Add IP → Allow 0.0.0.0/0
4. Copy connection string
5. Set as MONGO_URI in Render environment variables

## 🌍 Deployment Details
### 🔹 Backend (Render)
1. Runtime: Python
2. Start Command:
   ```bash
   gunicorn app:app
   ```
 - Environment Variable:
    -MONGO_URI
### 🔹 Frontend (Vercel)
 - Set Environment Variable:
    ```bash
    REACT_APP_API_BASE_URL=https://diabetes-backend-flask.onrender.com
    ```

## 👨‍💻 Author
Ashish Singh
🎓 B.Tech Student
💡 Aspiring Data Scientist
⚡ Machine Learning Enthusiast
