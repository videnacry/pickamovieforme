const dotenv = require('dotenv').config()
const path = require('path')

//-------------------DB constants-----------------------------
const DB = {
    name:process.env.DB_NAME,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
}

//-------------------Express constants-------------------------
const EXPRESS = {
    port:process.env.PORT
}

//-------------------------API key-----------------------------
const API = {
    key:process.env.API_KEY
}

//------------------Sequelize config----------------------------
const development = {
  username: DB.user,
  password: DB.password,
  database: DB.name,
  host: DB.host,
  dialect: process.env.DIALECT
}
const test = {
  username: DB.user,
  password: DB.password,
  database: DB.name,
  host: DB.host,
  dialect: process.env.DIALECT
}
const production = {
  username: DB.user,
  password: DB.password,
  database: DB.name,
  host: DB.host,
  dialect: process.env.DIALECT
}

module.exports = {
  DB : DB,
  EXPRESS : EXPRESS,
  API : API,
  development : development,
  test : test,
  production : production
}
  
