import express from 'express'

const app = express()

let PORT = process.env.PORT || 3000

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
