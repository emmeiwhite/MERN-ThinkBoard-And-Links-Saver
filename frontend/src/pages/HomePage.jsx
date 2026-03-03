import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import toast from 'react-hot-toast'

import NoteCard from '../components/Notecard'
import api from '../lib/axios'
import NoteNotFound from '../components/NotesNotFound'

export default function HomePage() {
  const [rateLimited, setRateLimited] = useState(false)

  // Let's integrate our API for the home page. Principle is UI=Fxn(state) changing over time, so we need to create the notes state
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchNotes() {
    try {
      setLoading(true)
      const response = await api.get(`/notes`)

      setNotes(response.data)
      setRateLimited(false)
    } catch (error) {
      if (error.response?.status === 429) {
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

      {rateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div
            className="text-primary text-center
            py-10">
            Loading notes ...
          </div>
        )}

        {notes.length === 0 && !rateLimited && <NoteNotFound />}

        {notes.length > 0 && !rateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
