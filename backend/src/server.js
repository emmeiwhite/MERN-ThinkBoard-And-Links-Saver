import express from 'express'
import cors from 'cors'
import notesRouter from './routes/notesRoutes.js'
import authRouter from './routes/authRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import path from 'path'

// User - Auth
import session from 'express-session'
import MongoStore from 'connect-mongo'

dotenv.config()

const __dirname = path.resolve()

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:5173', 'https://yourapp.com']
    })
  )
}

app.use(express.json()) // middleware to parse json data

const PORT = process.env.PORT || 3000

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

app.use(rateLimiter)

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/notes', notesRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  // For routes other than /api/v1/note, we will serve our Optimised FE
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  })
}

// Connect to DB
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
  })
})
