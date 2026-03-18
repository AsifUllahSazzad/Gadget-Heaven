# 📌 Project Overview

GadgetHeaven is a modern e-commerce web application built with React. It allows users to browse gadgets, view product details, add items to cart and wishlist, and manage purchases seamlessly.

The application focuses on smooth user experience, dynamic routing, state management, and responsive UI design based on a Figma layout.

## 🔹 🛠️ Technologies Used

- ⚛️ React.js
- 🔀 React Router
- 🎯 Context API
- 💾 LocalStorage
- 🎨 Tailwind CSS / DaisyUI
- ⭐ React Rating Stars Component
- 🔔 React Toastify (for notifications)
- 📊 Recharts (for statistics page)

## ⚙️ Key Features

### 🏠 Home Page

- Beautiful banner with navigation to dashboard
- Sidebar category filtering (Computers, Phones, etc.)
- Dynamic product cards (6–9 items initially)
- Nested routing for category-based filtering

### 📄 Product Details Page

- Full product information display
- 🛒 Add to Cart functionality
- ❤️ Add to Wishlist (disabled after one click)
- Toast notifications for actions

### 📊 Dashboard

- Two tabs:
  - 🛒 Cart
  - ❤️ Wishlist
- Total price calculation
- Sort items by price (descending)
- Add/remove functionality

### 📈 Statistics Page

- Composed chart using Recharts
- Displays:
  - Price (Y-axis)
  - Product Name (X-axis)
  - Rating (scatter)

### 🧠 React Concepts Used

- ✅ Components & Props
- ✅ State Management (useState)
- ✅ Side Effects (useEffect)
- ✅ Context API (Global State)
- ✅ React Router (useNavigate, useLocation)
- ✅ Conditional Rendering
- ✅ Dynamic Routing
- ✅ Custom Hooks (optional)

### 📦 Data Management

- Context API → Manage cart & wishlist globally
- LocalStorage → Persist data after reload

### 💡 Special Functionalities

- 🔔 Toast messages:
  - Add to Cart → Success message
  - Add to Wishlist → Different message
- 🚫 Wishlist duplicate prevention
- 💰 Cart price limit (max $1000)
- 🧾 Purchase system:
  - Shows congratulation modal 🎉
  - Clears cart instantly
  - Redirects to Home (without reload)
- 🎨 Dynamic Navbar background using useLocation()
- 🌐 Dynamic page title using react-helmet-async

## 📁 Folder Structure

```
src/
│── components/
│── pages/
│── routes/
│── utilities/
│── assets/
│── App.jsx
│── main.jsx
```

## 🧪 Optional Features Implemented

- ✅ Remove items from Cart
- ✅ Remove items from Wishlist
- ✅ Add from Wishlist → Cart

## 🔥 5 Highlight Features

1. Dynamic category filtering using nested routes
2. Global state management with Context API
3. Persistent cart & wishlist using LocalStorage
4. Interactive statistics chart (Recharts)
5. Purchase flow with modal & instant state reset

### 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/gadgetheaven.git

# Navigate to project folder
cd gadgetheaven

# Install dependencies
npm install

# Run the project
npm run dev
```

### 👨‍💻 Author

Asif Ullah Sazzad
📧 asifullahsazzad0@gmail.com

🔗 [GitHub:] (https://github.com/AsifUllahSazzad)
