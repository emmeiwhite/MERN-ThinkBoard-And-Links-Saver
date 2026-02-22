// https://upstash.com/docs/redis/sdks/ratelimit-ts/gettingstarted#add-ratelimit-to-your-endpoint
import { Ratelimit } from '@upstash/ratelimit' // for deno: see above
import { Redis } from '@upstash/redis'

// Create a new ratelimiter, that allows 10 requests per 20 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '20 s')
})

export default ratelimit
