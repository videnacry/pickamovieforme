const dotenv = require('dotenv').config()
const fs = require('fs')
const path = require('path')

const DB = {
    name:process.env.DB_NAME,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
}

const EXPRESS = {
    port:process.env.PORT
}

const sequelizeConfigPath = path.resolve(__dirname, 'config.json')
if(!fs.existsSync(sequelizeConfigPath)){
    const sequelizeConfig = {
        development: {
          username: DB.user,
          password: DB.password,
          database: DB.name,
          host: DB.host,
          dialect: process.env.DIALECT
        },
        test: {
          username: DB.user,
          password: DB.password,
          database: DB.name,
          host: DB.host,
          dialect: process.env.DIALECT
        },
        production: {
          username: DB.user,
          password: DB.password,
          database: DB.name,
          host: DB.host,
          dialect: process.env.DIALECT
        }
      }
    fs.writeFile(sequelizeConfigPath, JSON.stringify(sequelizeConfig), (err) => {
        if(err) console.log(err)
    })
}

module.exports = {
    DB : DB,
    EXPRESS : EXPRESS
}