const UserController = require('../controllers/UserController')

/**
 * Define routes of User's data
 */
const user = app => {

  //STORE USER
  app.post('/users', UserController.storeUser)

  // Get a single user
  app.get('/users/:user_id', UserController.getUserById)

  // Update user
  app.put('/users/:user_id', UserController.updateUser)

  // Delete user
  app.delete('/users/:user_id', UserController.deleteUser)

  //GET USERS
  app.get('/users', UserController.getUsers)

  // Get User's reviews
  app.get('/users/:user_id/reviews', UserController.getUserReviews)

  // Get a single review
  app.get('/users/:user_id/reviews/:review_id', UserController.getUserReview)

}

module.exports = user