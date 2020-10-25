const Models = require('../models/Models')
const validationMessage = require('./validationMessage')


module.exports = {

  storeUser: async (req, res) => {

    const user = Models.User.build(req)
    const err = await validationMessage(user)
    if(err){
      console.log(err);
      // res.status(422).send(err)
    }else{
      // Models.User.create(user)
      user.save()
        .then(result =>{
          console.log('/login', result);
          // res.status(200).redirect('/login')
        })
    }
  }
}