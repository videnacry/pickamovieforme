// Import routes
const login = require('./login')
const register = require('./register')
const user = require('./user')
const review = require('./review')
const comment = require('./comment')

/**
 * Add routes to app
 */
const Router = app => {
  login(app)
  register(app)
  user(app)
  review(app)
  comment(app)
}

module.exports = Router