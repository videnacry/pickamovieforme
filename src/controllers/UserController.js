const {User, Review}      = require('../models/Models')
const validationMessage   = require('./validationMessage')


const getUsers = (req, res) =>{
  let username = false
  if(Object.keys(req.query).length){
    if(req.query.username)
      username = req.query.username 
    else{
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Bad request'
        }
      })
      return
    }
  }

  User.findAll({
    where: {
      username: username
    }
  })
    .then(users =>{
      users.length
      ? res.status(200).json({
        success: true,
        data: users,
        error: null
      })
      : res.status(404).json({
          success: false,
          data: null,
          error: {
            message: "User/s not found"
          }
      })
    })
    .catch(()=>{
      res.status(500).json({
        success: false,
        data: null,
        error: {
          message: "The request could not be processed"
        }
      })
    })
}

/**
 * Check if already exist an user with this email
 */
const emailInUse = async (email) => {
  const user = await User.findOne({
    where: {
      email: email
    }
  })
  if (user) {
    return {
      message:  'Email already in user',
      type:     'Validation error',
      path:     'email',
      value:    email,
    }
  }
}

/**
 * Check if already exist an user with this username
 */
const usernameInUse = async (username) => {
  const user = await User.findOne({
    where: {
      username: username
    }
  })
  if (user) {
    return {
      message: 'Username already in user',
      type: 'Validation error',
      path: 'username',
      value: username
    }
  }
}

/**
 * Store User.
 */
const storeUser = async (req, res) => {
  var errors = []
  for (const key in req.body) {
    if (req.body[key] == null) {
      const error = {success: false, path: key, message: "required", type: "Validation error"}
      errors.push(error)
    }
  }
  if(errors.length > 0){
    res.status(400).json(errors)
  }else{
    const user = User.build(req.body)
  let err = await validationMessage(user)
  if(!err)
    err = []

  const mailExist = await emailInUse(req.body.email)
  const usernameExist = await usernameInUse(req.body.username)

  if(mailExist)
    err.push(mailExist)
  if(usernameExist)
    err.push(usernameExist)

  if (err.length) {
    res.status(422).json(err)
  } else {
    user.save()
      .then(() => {
        res.status(200).json({
          success: true
        })
      })
  }

  }
}

/**
 * Get User by ID
 * @return {json} Used or error message
 */
const getUserById = (req, res) => {
  User.findOne({
    where: {
      user_id: req.params.user_id
    }
  })
    .then((user) => {
      user
        ? res.status(200).json({
          success: true,
          data: user,
          error: null
        }) 
        : res.status(404).json({
            success: false,
            data: null,
            error: {
              message: "User not found"
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

/**
 * Update User
 */
const updateUser = (req, res) => {
  User.update(
    req.body, {
      where: {
        user_id: req.params.user_id
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
          message: "User not found"
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

/**
 * Delete User
 * Soft delete. Add Date in deleted_date column
 */
const deleteUser = (req, res) => {
  User.destroy({
    where: {
      user_id: req.params.user_id
    }
  })
    .then((user)=>{
      user
        ? res.status(200).json({
          success: true,
          data: null,
          message: "User deleted correctly",
          error: null
        })
        : res.status(404).json({
          success: false,
          data: null,
          error: {
            message: "User not found"
          }
        })
    })
}

/**
 * Get User with their reviews
 */
const getUserReviews = (req, res)=>{
  User.findOne({
    where: {
      user_id: req.params.user_id
    },
    include: {
      model: Review,
    }
  })
    .then(user =>{
      user
        ? res.status(200).json({
          success: true,
          data: user,
          error: null
        })
        : res.status(404).json({
          success: false,
          data: null,
          error: {
            message: "User not found"
          }
        })
    })
    .catch(()=>{
      res.status(500).json({
        success: false,
        data: null,
        error: {
          message: "The request could not be processed"
        }
      })
    })
}

/**
 * Get User with a sprecific review (by ID)
 */
const getUserReview = (req, res)=>{
  User.findOne({
    where: {
      user_id: req.params.user_id
    },
    include: {
      model: Review,
      where: {
        review_id: req.params.review_id
      }
    }
  })
    .then(user =>{
      user
        ? res.status(200).json({
          success: true,
          data: user,
          error: null
        })
        : res.status(404).json({
          success: false,
          data: null,
          error: {
            message: "User or Review not found"
          }
        })
    })
    .catch(()=>{
      res.status(500).json({
        success: false,
        data: null,
        error: {
          message: "The request could not be processed"
        }
      })
    })
}

module.exports = {
  getUsers:       getUsers,
  getUserById:    getUserById,
  storeUser:      storeUser,
  updateUser:     updateUser,
  deleteUser:     deleteUser,
  getUserReviews: getUserReviews,
  getUserReview:  getUserReview
}