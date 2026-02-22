import ratelimit from '../config/upstash.js'

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit('my-limit-key') // "my-limit-key": In authenticated users, it would be userID

    if (!success) {
      return res.status(429).json({
        message: 'Too many requests, please try after some time'
      })
    }
    next()
  } catch (error) {
    console.log('Rate limit error', error)
    next(error)
  }
}
export default rateLimiter
