import { z } from 'zod'

const configSchema = z.object({
  MONGODB_URI: z.string(),
  MONGODB_DB_NAME: z.string(),
  WEBHOOK_SECRET: z.string(),
})

const configProject = configSchema.safeParse({
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
})

if (!configProject.success) {
  throw new Error('Invalid configuration. Please check your .env file.')
}

const envConfig = configProject.data
export default envConfig
