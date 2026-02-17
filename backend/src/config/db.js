import mongoose from 'mongoose'

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to MongoDB successfully!`)
  } catch (error) {
    console.log(`Error connecting to the Database`)
    process.exit(1) // exit with failure
  }
}

export default connectDB
