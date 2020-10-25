
async function validationMessage(object){

  return await object.validate()
    .then(valid => false)
    .catch(err => {
      let errors = []
      for (var prop in err.errors) {
        errors[prop] = {}

        for (var i = 0; i < 4; i++) {
          errors[prop][Object.keys(err.errors[prop])[i]] = Object.values(err.errors[prop])[i]
        }
      }
      return errors
  })
}


module.exports = validationMessage