# MERN ThinkBoard & Links Saver

A simple full-stack notes and links management application built with the MERN stack.

## 🚀 Live Demo

Deployed on Render
[View Live App](https://mern-thinkboard-and-links-saver.onrender.com/)

## 🛠 Tech Stack

#### Frontend

- React
- Vite

API Contracts:

- GET /api/v1/notes
- GET /api/v1/notes/:id
- POST /api/v1/notes
- PATCH /api/v1/notes/:id
- DELETE /api/v1/notes/:id

#### Backend

- Node.js
- Express
- Mongoose

Database

- MongoDB Atlas

## ✨ Features

- Create notes
- Save useful links
- Edit notes
- Delete notes
- Responsive UI

## 📦 Project Structure

```
root
 ├ backend
 │   ├ src
 │   │   ├ routes
 │   │   ├ middleware
 │   │   └ server.js
 │   └ package.json
 │
 ├ frontend
 │   ├ src
 │   └ package.json
 │
 └ package.json
```

## ⚙️ Development Setup

Clone the repository:

```
git clone <repo-url>
```

Install dependencies:

```
npm install --prefix backend
npm install --prefix frontend
```

Run development servers:

Backend:

```
cd backend
npm run dev
```

Frontend:

```
cd frontend
npm run dev
```

## 🏗 Production Build

Build the frontend:

```
npm run build
```

Start the backend server:

```
cd backend
npm start
```

## 🌍 Deployment

The application is deployed using Render.

## 📌 Status

First production deployment completed 🎉

# PHASE-2 (From MVP to Production Grade Thinking)

Current Status (MVP Complete)
Backend

You already have a Notes CRUD API.

API Contracts:

```
GET /api/v1/notes
GET /api/v1/notes/:id
POST /api/v1/notes
PATCH /api/v1/notes/:id
 DELETE /api/v1/notes/:id
```

Payload example:

```
POST /api/v1/notes
{
  title,
  content
}
```

### Frontend (React)

Routing structure:

```
/
|-- HomePage        -> list of notes
|-- /note/:id       -> note detail
|-- /create         -> create note
```

So far:

- React Router implemented

- CRUD working

- Global notes (no users)

- Hosted on Render

This is my perfect MVP.

# Phase-2 Vision (Version-1 Product)

Now we **evolve the app like real production software**.

Two parallel tracks:

---

# 1️⃣ Backend Evolution

### Introduce **User Entity**

Meaning:

Notes will now belong to a user.

```
User
 ├── id
 ├── name
 ├── email
 ├── passwordHash
 └── createdAt

Note
 ├── id
 ├── title
 ├── content
 ├── userId
 └── timestamps
```

---

### Authentication System

I am revisiting and brushup both:

1️⃣ **Session-based authentication**

- cookies
- express-session
- server keeps session store

2️⃣ **JWT authentication**

- stateless
- token stored client side
- Authorization header

This is **excellent for interviews**, because companies may use either.

But I am planning to design it in a way that **frontend integration becomes the main focus**, as you mentioned.

---

# 2️⃣ Frontend Evolution (React Architecture)

Our plan here is **very strong**.

We will upgrade frontend step-by-step.

### Replace basic patterns

❌ Current

```
useEffect + fetch
```

✅ Future

```
TanStack Query
```

Benefits:

- caching
- automatic refetch
- loading states
- error handling
- pagination support

---

### Improve state architecture

From:

```
useState
```

To exploring:

- Context + useReducer
- Redux Toolkit
- Zustand

**state management evolution**.

---

### Performance & UX

Add real production patterns:

- Pagination
- Infinite scroll
- Search
- Lazy loading
- Code splitting
- React performance patterns
- Custom hooks
- Service/API layer

---

# Final Target

A **portfolio-ready fullstack product**:

ThinkBoard V1

Features:

- User authentication
- Protected routes
- User notes
- Search
- Pagination
- Optimized API fetching
- Scalable React architecture
- Clean backend structure
- Hosted production build

---

### Importance of prior note taking

This is **exactly how senior engineers learn**.

Flow:

```
Our notes
   ↓
Our questions
   ↓
discussion with LLM
   ↓
implementation
```

Not passive learning.

---

# Authentication (Correct Order)

Before writing auth code we must **design properly**.

Step-1 will be:

### Introduce User Model

Then:

Step-2

### Auth API Contracts

Example:

```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
GET  /api/v1/auth/me
```

Then:

Step-3

Password hashing

```
bcrypt
```

Then:

Step-4

JWT or Session

Then:

Step-5

Protect routes

```
GET /notes  -> only logged user notes
```

---

> Designing the **User Schema + Note ownership relation**.
