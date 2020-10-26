const Models = require('../models/Models')
const validationMessage = require('./validationMessage')


module.exports = {

  storeReview: async (req, res) => {

    const review = Models.Review.build(req)
    const err = await validationMessage(review)
    if(err){
      console.log(err);
      // res.status(422).send(err)
    }else{
      // Models.review.create(review)
      review.save()
        .then(result =>{
          console.log('/login', result);
          // res.status(200).redirect('/login')
        })
        .catch(err => {console.log(err)})
    }
  }
}