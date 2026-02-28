import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function HomePage() {
  const [rateLimited, setRateLimited] = useState(false)

  // Let's integrate our API for the home page. Principle is UI=Fxn(state) changing over time, so we need to create the notes state
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchNotes() {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/note')

      setNotes(response.data)
      setRateLimited(false)
    } catch (error) {
      if (error.response.status === 429) {
        setRateLimited(true)
      } else {
        toast.error('Failed to load notes')
      }
    } finally {
      setLoading(false)
    }
  }

  // In MVP, we'll use useEffect() but ultimately we'll go with Tanstack Query
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {loading && <p>loading ...</p>}
      {rateLimited && <RateLimitedUI />}

      {notes.length === 0 && loading === false && <p>Create a note</p>}

      {notes.length > 0 && <h2>Total Notes: {notes.length}</h2>}
    </div>
  )
}
