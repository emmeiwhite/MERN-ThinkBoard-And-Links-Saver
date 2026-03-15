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

# SomeInsights on Sessions

The **express-session requires a secret key**, and if we haven't created the environment variable yet, it crashes.

---

# Why `SESSION_SECRET` Exists

When Express creates a session cookie, it **signs the cookie** using the secret.

Example cookie sent to browser:

```text
connect.sid=s%3Aabc123xyz.signature
```

The **signature is created using the secret**.

Why?

So the user **cannot modify the cookie**.

Without signing, an attacker could change:

```text
userId=1  → userId=2
```

The signature ensures:

```text
server verifies cookie integrity
```

---

# Step 1 — Install dotenv

Run:

```bash
npm install dotenv
```

---

# Step 2 — Create `.env`

Inside your backend root:

```
backend/
   .env
   server.js
```

Add:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string

SESSION_SECRET=supersecretthinkboardkey
```

For now this is fine.

In production it should be something like:

```
SESSION_SECRET=8f7a91b1c2d93a0f7c9b3e....
```

---

# Step 3 — Load Environment Variables

At the **very top of `server.js`**:

```javascript
import dotenv from 'dotenv'
dotenv.config()
```

Your file should start like this:

```javascript
import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import MongoStore from 'connect-mongo'

dotenv.config()

const app = express()
```

---

# Step 4 — Now Session Middleware Works

```javascript
app.use(
  session({
    secret: process.env.SESSION_SECRET,

    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    }),

    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24
    }
  })
)
```

Now the error disappears.

---

# Quick Interview Insight

If interviewer asks:

**"What does SESSION_SECRET do?"**

Answer like this:

> SESSION_SECRET is used to sign the session ID cookie.
> It ensures the cookie cannot be tampered with by the client.
> When a request comes in, the server verifies the cookie signature using the secret before trusting the session.

---

# Now We Are Ready For The Real Auth Logic

Next we will implement the **real register pipeline**:

```
POST /api/v1/auth/register
```

Inside controller we will implement:

```
sanitize
validate
check email exists
hash password
save user
create session
return user
```

And this will introduce **one powerful pattern used by senior backend engineers**.

```
Auth Controller
      ↓
Auth Service
      ↓
User Model
```

This will make your code **very interview impressive**.

---

Before we proceed, tell me one thing.

In **session authentication**, after login the server sends a cookie like:

```
connect.sid = xyz123
```

### Now, we have

```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
```

## 4️⃣ Auth Middleware (Protected Routes)

`middleware/authMiddleware.js`

```
export const protectRoute = (req, res, next) => {

if (!req.session.user) {
return res.status(401).json({
message: "Unauthorized"
})
}

next()
}
```

This is the gatekeeper.

### How It Works

Example request:

`GET /api/v1/notes`

Middleware checks:

`req.session.user`

```
If it exists → allow.

If not → block.
```

## 4️⃣ What Happens Now (Request Lifecycle)

Example:
`GET /api/v1/notes/123`

Flow:

```
Request arrives
      │
      ▼
protectRoute
      │
      │ checks req.session.user
      ▼
validateObjectId
      │
      │ checks Mongo ObjectId format
      ▼
getNoteById Controller
      │
      ▼
Database Query
```

### Route

Clean Implementation of /auth/me

```
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password')

    res.json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}
```

## Now Comes the Fun Part: React Architecture

Now our Backend Is React-Ready
We have:

```

```
