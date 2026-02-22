// https://upstash.com/docs/redis/sdks/ratelimit-ts/gettingstarted#add-ratelimit-to-your-endpoint
import { Ratelimit } from '@upstash/ratelimit' // for deno: see above
import { Redis } from '@upstash/redis'

// To be able to access environment variables (Redis.fromEnv) we need our famous dotenv
import dotenv from 'dotenv'
dotenv.config()

// Create a new ratelimiter, that allows 10 requests per 60 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '60 s')
})

export default ratelimit
