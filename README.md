# Password Reset Application

This is a full-stack password reset application built with **Node.js (Express)** for the backend and **React** for the frontend. It supports user registration, login, forgot password, and password reset functionality via email.

---

## Features

- User registration with hashed passwords (bcrypt)
- User login with email and password
- Forgot password: request password reset link via email
- Reset password using a secure token sent to email (valid for 1 hour)
- Token validation for password reset security

---

## Technologies Used

- Backend: Node.js, Express, MongoDB (Mongoose), bcryptjs, nodemailer
- Frontend: React, Axios, React Router DOM, Bootstrap 5
- Email Service: Gmail SMTP via Nodemailer

---

## Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud, e.g., MongoDB Atlas)
- A Gmail account for sending reset emails (with [App Password](https://support.google.com/accounts/answer/185833?hl=en) if using 2FA)
- [Create React App](https://create-react-app.dev/) for the frontend

---

## Environment Variables

Create a `.env` file in the backend root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
