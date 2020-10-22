/**
 * Define routes of Review's data
 */
const review = app => {
  // Store review
  app.post('/reviews', function(req, res){
  })

  // Get a single review
  app.get('/reviews/:review_id', function(req, res){
  })

  // Update review
  app.put('/reviews/:review_id', function(req, res){
  })

  // Delete review
  app.delete('/reviews/:review_id', function(req, res){
  })

  //GET Reviews
  app.get('/reviews', function(req, res){
  })

  // Get comment's reviews
  app.get('/reviews/:review_id/comments', function(req, res){
  })

}

module.exports = review