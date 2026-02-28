import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'

export default function HomePage() {
  const [isRateLimitReached] = useState(true)

  // Let's integrate our API for the home page. Principle is UI=Fxn(state) changing over time, so we need to create the notes state
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchNotes() {
    try {
      const notes = await axios.get('http://localhost:3000/api/v1/notes')

      console.log(notes)
    } catch (error) {
      console.log('Error fetching notes', error)
    } finally {
      setLoading(false)
    }
  }

  // In MVP, we'll use useEffect() but ultimately we'll go with Tanstack Query
  useEffect(() => {
    fetchNotes()
  })

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimitReached && <RateLimitedUI />}
    </div>
  )
}
