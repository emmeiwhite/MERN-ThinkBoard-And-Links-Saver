import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import toast from 'react-hot-toast'
import { useAuth } from '../../hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email || !form.password) {
      toast.error('Provide email and password')
      return
    }

    setLoading(true)

    try {
      await login(form)
      // Navigate to Homepage
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      toast.error('Login Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-primary font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
