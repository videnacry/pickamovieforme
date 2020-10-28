const {Comment}           = require('../models/Models')
const validationMessage   = require('./validationMessage')


/**
 * Store Comment.
 */
const storeComment = async (req, res) => {
  let comment = {
    comment: req.body.comment,
    user_id: req.body.user_id,
    review_id: req.body.review_id
  }
  comment = Comment.build(comment)
  let error = await validationMessage(comment)
  if(!error)
    error = []

  if (error.length) {
    res.status(422).json({
      success: false,
      data: null,
      error: error
    })
  } else {
    comment.save()
      .then((data) => {
        res.status(200).json({
          success: true,
          data: data,
          error: null
        })
      })
  }
}
