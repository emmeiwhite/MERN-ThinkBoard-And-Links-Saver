import express from 'express'

const app = express()

let PORT = process.env.PORT || 3000
// Creating our routes
// An Endpoint consists of a route + Method

// CRUD Operations with 4 mostly used methods
app.get('/api/v1/notes', (req, res) => {
  res.send('Our first demo note in the first route')
})

app.post('/api/v1/notes', (req, res) => {
  res.send('New Note Created')
})

app.patch('/api/v1/notes/:id', (req, res) => {
  res.send(' Note edited Created')
})

app.delete('/api/v1/notes/:id', (req, res) => {
  res.send('Note Deleted')
})

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
