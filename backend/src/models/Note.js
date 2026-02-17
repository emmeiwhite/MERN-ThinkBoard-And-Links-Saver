import mongoose from 'mongoose'

// 1. Create Schema
// 2. Create Model from Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
)
