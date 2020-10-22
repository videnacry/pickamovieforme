/**
 * Define routes of Comment's data
 */
const comment = app => {

  // Store comment
  app.post('/comments', function(req, res){
  })

  // Get a single comment
  app.get('/comments/:comment_id', function(req, res){
  })

  // Update comment
  app.put('/comments/:comment_id', function(req, res){
  })

  // Delete comment
  app.delete('/comments/:comment_id', function(req, res){
  })

  //GET comments
  app.get('/comments', function(req, res){
  })

}

module.exports = comment