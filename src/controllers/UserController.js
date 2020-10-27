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
