export const protectRoute = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  // attach userId to request
  req.userId = req.session.user.id

  // Now every protected controller can simply use: req.userId, instead of repeatedly writing req.session.user.id

  next()
}
