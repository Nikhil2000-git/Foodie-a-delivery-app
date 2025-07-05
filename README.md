👨‍🍳 Admin features

💳 Stripe payment

🔐 Auth & protected routes

🛒 Full cart + checkout flow

# 🍔 Foodie – A Delivery App

**Foodie** is a full-stack food ordering web app built using the **MERN stack** with **Stripe payments** and a powerful **Admin Dashboard**. Users can browse delicious dishes, manage their cart, and securely pay online. Admins can add, edit, or delete food items and manage orders.

---

## 🔥 Features

### 👨‍🍳 User Features
- 🍽 Browse food items with images & details
- 🛒 Add/remove items to cart
- 💳 Stripe secure payment integration
- 📦 Place orders with confirmation
- 🔐 JWT-based login & registration
- 📱 Fully responsive on mobile & desktop

### 🔧 Admin Features
- ✅ Admin login (protected routes)
- ➕ Add new food items
- ✏️ Edit existing items
- ❌ Delete food items
- 📋 View all orders placed by users

---

## 🚀 Tech Stack

**Frontend:**  
- React.js  
- React Router  
- Axios  
- Stripe.js + React Stripe Elements  
- TailwindCSS or Bootstrap

**Backend:**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- Stripe Payment API

---

## 💳 Stripe Integration

- Secure checkout using Stripe's Payment Intent API
- Handles card validation, confirmation, and fallback
- Payment history stored after successful order

---

## 👨‍💼 Admin Dashboard

Accessible via: `/admin`  
- Protected by role-based auth
- Add/edit/delete products
- View list of user orders

## ⚙️ How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/Nikhil2000-git/Foodie-a-delivery-app.git
cd Foodie-a-delivery-app
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Add your .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Start the backend:

bash
Copy
Edit
npm start
3. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
Add your frontend .env:

ini
Copy
Edit
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
Start the frontend:

bash
Copy
Edit
npm start
🌐 Live Demo
🔗 Live App (Add link here when deployed)

🙋‍♂️ Author
Burra Nikhil
GitHub Profile


📦 To-Do (Future Enhancements)
✅ Razorpay or UPI payment support

✅ Order status update (delivered/pending)

✅ Search & filter functionality

✅ User profile page with order history
