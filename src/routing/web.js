// Import routes
const user = require('./user')

/**
 * Add routes to app
 */
const Router = app => {
  user(app)
}

module.exports = Router