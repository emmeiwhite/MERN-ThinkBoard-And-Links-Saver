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
