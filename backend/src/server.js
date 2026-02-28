import express from 'express'
import cors from 'cors'
import notesRouter from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'

dotenv.config()

const app = express()

// Allow multiple origins (dev + prod)
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://yourapp.com']
  })
)

app.use(express.json()) // middleware to parse json data

const PORT = process.env.PORT || 3000

app.use(rateLimiter) // order matters, First ratelimit will check how many requests are made by the user and accordinly allow or restrict requests from the user.
app.use('/api/v1/notes', notesRouter)

// Connect to DB
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
  })
})
