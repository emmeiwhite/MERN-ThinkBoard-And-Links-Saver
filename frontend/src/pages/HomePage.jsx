import { useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'

export default function HomePage() {
  const [isRateLimitReached] = useState(true)
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimitReached && <RateLimitedUI />}
    </div>
  )
}
