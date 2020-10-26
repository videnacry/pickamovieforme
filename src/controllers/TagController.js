const Models = require('../models/Models')
const validationMessage = require('./validationMessage')


module.exports = {

  storeTag: async (req, res) => {

    const tag = Models.Tag.build(req)
    const err = await validationMessage(tag)
    if(err){
      console.log(err);
      // res.status(422).send(err)
    }else{
      // Models.tag.create(tag)
      tag.save()
        .then(result =>{
          console.log('/login', result);
          // res.status(200).redirect('/login')
        })
        .catch(err => {})
    }
  }
}