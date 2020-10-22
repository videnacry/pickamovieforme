const dotenv = require('dotenv').config()
const DB = {
    name:process.env.DB_NAME,
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD
}
const EXPRESS = {
    port:process.env.PORT
}
module.exports = {
    DB : DB,
    EXPRESS : EXPRESS
}