import express from 'express'
import notesRouter from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Connect to DB
connectDB()

let PORT = process.env.PORT || 3000

app.use('/api/v1/notes', notesRouter)

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
