const {User}              = require('../models/Models')
const validationMessage   = require('./validationMessage')


getUsers = async (req, res) =>{
  let email = false
  if(Object.keys(req.query).length){
    if(req.query.email)
      email = req.query.email 
    else{
      res.status(400).json({
        success: false,
        message: 'Bad request'
      })
      return
    }
  }

  User.findAll({
    where: {
      email: email
    }
  })
    .then(users =>{
      users.length
      ? res.status(200).json(users)
      : res.status(422).json({
          success: false,
          message: "User not fount"
      })
    })
    .catch(()=>{
      res.status(500).json({
        success: false,
        message: "The request could not be processed"
      })
    })
}


/**
 * Check if already exist an user with this email
 */
emailInUse = async (email) => {
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
usernameInUse = async (username) => {
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
storeUser = async (req, res) => {
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

/**
 * Get User by ID
 * @return {json} Used or error message
 */
getUserById = (req, res) => {
  User.findOne({
    where: {
      user_id: req.params.user_id
    }
  })
    .then((user) => {
      user
        ? res.status(200).json(user) 
        : res.status(422).json({
            success: false,
            message: "User not fount"
          })
    })
    .catch(() => {
      res.status(500).json({
        success: false,
        message: "The request could not be processed"
      })
    })
}
