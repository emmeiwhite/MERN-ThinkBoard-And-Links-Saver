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
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    }
  },
  { timestamps: true }
)

// Note Model
const Note = mongoose.model('Note', noteSchema)

export default Note
