/**
 * Define routes of Post's data
 */
const post = app => {
  // Store review
  app.post('/reviews', function(req, res){
  })

  // Get a single user
  app.get('/reviews/:review_id', function(req, res){
  })

  // Update user
  app.put('/reviews/:review_id', function(req, res){
  })

  // Delete user
  app.delete('/reviews/:review_id', function(req, res){
  })

  //GET Reviews
  app.get('/reviews', function(req, res){
  })

  // Get comment's reviews
  app.get('/reviews/:review_id/comments', function(req, res){
  })

}