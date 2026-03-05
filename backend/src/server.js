import express from 'express'
import cors from 'cors'
import notesRouter from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import path from 'path'

dotenv.config()

const __dirname = path.resolve()
console.log(__dirname)
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

// Serving static assets --- In our case, optimised React App within dist folder

app.use(express.static(path.join(__dirname, '../frontend/dist')))

// For routes other than /api/v1/note, we will serve our Optimised FE
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

// Connect to DB
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
  })
})
