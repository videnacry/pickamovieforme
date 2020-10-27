/**
 * Isolate error properties to send response
 * @param {Object} object Errors from Sequelize
 */
async function validationMessage(object){
  return await object.validate()
    .then(() => false)
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