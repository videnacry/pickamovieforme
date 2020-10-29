const ReviewController = require('../controllers/ReviewController')

/**
 * Define routes of Review's data
 */
const review = app => {
  // Store review
  app.post('/reviews', ReviewController.storeReview)

  app.get('/reviews/search/:title_text', ReviewController.searchMovie)

  // Get a single review
  app.get('/reviews/:review_id', ReviewController.getReviewById)

  // Update review
  app.put('/reviews/:review_id', ReviewController.updateReview)

  // Delete review
  app.delete('/reviews/:review_id', function(req, res){
  })

  //GET Reviews
  app.get('/reviews', ReviewController.getReviews)

  //GET all Reviews
  app.get('/reviews/all', ReviewController.getReviewsAll)

  // Get comment's reviews
  app.get('/reviews/:review_id/comments', function(req, res){
  })

}
// ReviewController.getReviewsAll({},{})
module.exports = review