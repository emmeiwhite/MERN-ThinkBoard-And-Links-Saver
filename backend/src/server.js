import express from 'express'
import notesRouter from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Connect to DB
connectDB()

app.use(express.json()) // middleware to parse json data

const PORT = process.env.PORT || 3000

// Introducing middleware
app.use((req, res, next) => {
  console.log(`Request method is ${req.method} & request url is ${req.url}`)
  next()
})

app.use('/api/v1/notes', notesRouter)

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
