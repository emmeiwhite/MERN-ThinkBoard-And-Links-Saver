/**
REGISTER FLOW
============
1) sanitize
2) validate
3) check email exists
4) hash password
5) save user
6) create session
7) return user
 */

import bcrypt from 'bcrypt'
import User from '../models/User.js'
export const registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body

    // 1️⃣ Basic Sanitization
    username = username.trim()
    email = email.trim().toLowerCase()

    // 2️⃣ Basic Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required'
      })
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters'
      })
    }

    // 3️⃣ Check if email already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already registered'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
