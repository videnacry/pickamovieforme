// DEPENDENCIES
const express     = require('express')
const {EXPRESS}   = require('./src/config/app-config')
const morgan      = require('morgan')
const bodyParser  = require('body-parser')
//ROUTER
const Router      = require('./src/routing/web')
//APP
const app         = express()


//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.json())


//ROUTES
Router(app)


app.listen(EXPRESS)