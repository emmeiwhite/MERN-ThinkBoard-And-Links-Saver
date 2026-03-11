import User from '../models/User.js'

export const registerUser = async (req, res) => {
  try {
    res.send('register endpoint working')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
