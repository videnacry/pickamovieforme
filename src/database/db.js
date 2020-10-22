const {Sequelize} = require('sequelize')
const {DB} = require('../config/app-config')

const sequelize = new Sequelize(
    DB.name,
    DB.user,
    DB.password,{
        host:DB.host,
        dialect:'mysql'
    }
)

module.exports = sequelize