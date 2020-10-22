/**
 * Define routes of User's data
 */
const user = app => {

  //STORE USER
  app.post('/users', function(req, res){
  })

  // Get a single user
  app.get('/users/:user_id', function(req, res){
  })

  // Update user
  app.put('/users/:user_id', function(req, res){
  })

  // Update user
  app.delete('/users/:user_id', function(req, res){
  })

  //GET USERS
  app.get('/users', function(req, res){
  })

  // Get User's reviews
  app.get('/users/:user_id/reviews', function(req, res){
  })

  // Get User's reviews
  app.get('/users/:user_id/reviews/:review_id', function(req, res){
  })

  // Get User's reviews
  app.get('/users/:user_id/reviews/:review_id', function(req, res){
  })

  // Get User's reviews
  app.get('/users/:user_id/reviews/:review_id', function(req, res){
  })

}

module.exports = user