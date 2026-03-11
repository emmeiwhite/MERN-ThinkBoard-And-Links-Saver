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

    // 4️⃣ Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 5️⃣ Create User
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    })

    // 6️⃣ Create Session
    //   req.session.userId = user._id

    // Improvement : Later we can add roles and permissions without changing structure
    req.session.user = {
      id: user._id
    }

    // 7️⃣ Send Response
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

/**
 LOGIN FLOW
 =========
 
 */

export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body

    email = email.trim().toLowerCase()

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      })
    }

    // Find user
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    // Create session
    req.session.user = {
      id: user._id
    }

    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

/**
 LOGOUT 
 */

export const logoutUser = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({
        message: 'Logout failed'
      })
    }

    res.clearCookie('connect.sid')

    res.json({
      message: 'Logged out successfully'
    })
  })
}
