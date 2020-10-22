// Import routes
const user = require('./user')
const review = require('./review')

/**
 * Add routes to app
 */
const Router = app => {
  user(app)
  review(app)
}

module.exports = Router