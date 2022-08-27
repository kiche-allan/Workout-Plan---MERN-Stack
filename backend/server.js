if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }


require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const cors = require("cors")
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//express app
const app = express()


//REGISTER  GLOBAL MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//react to request, so get request handlers
//middlewares


// app.get('/', (req, res) => {
//     res.json({message: 'Welcome to the app'})
// })


//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user', userRoutes)

//connect too db
mongoose.connect(process.env.MONGO_URI)
//IT TAKES A PROMISE

.then(() => {
  //listen for request
app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port 4000', process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})


process.env
