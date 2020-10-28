const {Comment, Review} = require('../models')
// Comment.findAll({include:Review}).then(comment => console.log(comment))

// Comment.describe().then(r => console.log(r)).catch(err => console.log(err))
Review.findAll({include:Comment}).then(r => console.log(r)).catch(err => console.log(err))