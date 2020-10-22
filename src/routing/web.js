// Import routes
const user = require('./user')
const review = require('./review')
const comment = require('./comment')

/**
 * Add routes to app
 */
const Router = app => {
  user(app)
  review(app)
  comment(app)
}

module.exports = Router