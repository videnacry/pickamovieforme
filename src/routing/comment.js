const CommentController = require('../controllers/CommentController')

/**
 * Define routes of Comment's data
 */
const comment = app => {

  // Store comment
  app.post('/comments', CommentController.storeComment)

  // Get a single comment
  app.get('/comments/:comment_id', CommentController.getCommentById)

  // Update comment
  app.put('/comments/:comment_id', CommentController.updateComment)

  // Delete comment
  app.delete('/comments/:comment_id', CommentController.deleteComment)

  //GET comments
  // app.get('/comments', function(req, res){
  // })

}

module.exports = comment