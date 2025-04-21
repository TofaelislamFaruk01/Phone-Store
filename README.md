## 🚀 Phone Store App

A simple **Phone Store** web application built with **React** for the front-end and a **Node.js/Express server** running on your local machine to serve phone data. The app allows users to browse through different phones, view their details, and see prices. The server serves phone data stored in a JSON file.

---

### 📦 **Features:**

- **Frontend**: Built using React with Tailwind CSS for styling.
- **Backend**: A Node.js server built with Express serves the phone data from a JSON file.
- **Routing**: React Router is used for navigation between the homepage, phone list, and phone details.
- **Backend API**: The server serves data for phones using a simple RESTful API.

---

### 🛠️ **Technologies Used:**

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express, CORS
- **Database**: JSON file (`phones.json`) as a mock database for phone data.

---

### 📍 **API Endpoints (Backend)**

The backend server provides these endpoints:

- `GET /phones` – Returns a list of all phones.
- `GET /phones/:id` – Returns the details of a specific phone by ID.

---

### 📄 **Folder Structure**

```plaintext
Phone-Store/
├── frontend/             # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── server/               # Node.js backend
│   ├── phones.json       # Mock database of phones
│   ├── index.js          # Express server
│   └── package.json
└── README.md             # This file



