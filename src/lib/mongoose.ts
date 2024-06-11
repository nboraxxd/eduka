'use server'

import envConfig from '@/constants/config'
import mongoose from 'mongoose'

// singleton connection
let isConnected = false

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('🚗 MongoDB is already connected')
  }

  try {
    await mongoose.connect(envConfig.MONGODB_URI, {
      dbName: envConfig.MONGODB_DB_NAME,
    })
    isConnected = true
    console.log('🚀 MongoDB is connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
  }
}
