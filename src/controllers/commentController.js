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


const getCommentById = (req, res) => {
  Comment.findOne({
    where: {
      comment_id: req.params.comment_id
    }
  })
    .then((comment) => {
      comment
        ? res.status(200).json({
          success: true,
          data: comment,
          error: null
        }) 
        : res.status(404).json({
            success: false,
            data: null,
            error: {
              message: "Comment not found"
            }
          })
    })
    .catch(() => {
      res.status(500).json({
        success: false,
        data: null,
        error: {
          message: "The request could not be processed"
        }
      })
    })
}


const updateComment = (req, res) => {
  Comment.update(
    req.body, {
      where: {
        comment_id: req.params.comment_id
      }
    })
  .then((row) => {
    row[0]
      ? res.status(200).json({
        success: true,
        data: req.body,
        error: null
      })
      : res.status(404).json({
        success: false,
        data: null,
        error: {
          message: "Comment not found"
        }
      })
  })
  .catch(() => {
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: "The request could not be processed"
      }
    })
  })
}

const deleteComment = (req, res) => {
  Comment.destroy({
    where: {
      comment_id: req.params.comment_id
    }
  })
    .then((comment)=>{
      comment
        ? res.status(200).json({
          success: true,
          data: null,
          message: "Comment deleted correctly",
          error: null
        })
        : res.status(404).json({
          success: false,
          data: null,
          error: {
            message: "Comment not found"
          }
        })
    })
}
