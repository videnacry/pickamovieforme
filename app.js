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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http:/localhost:8080')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH')
        res.status(200).json({})
    }
    next()
})
app.use(morgan('dev'))
app.use(express.json())


//ROUTES
Router(app)


app.listen(EXPRESS)