const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')

//Imports Routes
const AuthRouter = require('./routes/AuthRoute')
const ReviewRouter = require('./routes/ReviewRoute')
const UserRouter = require('./routes/UserRoute')

//App Server
const app = express()

//Middleware
app.use(express.json())
app.use(cors())
//Routes
app.use('/api/auth', AuthRouter )
app.use('/api/review', ReviewRouter )
app.use('/api/user', UserRouter )


//Express  PORT and listening
const PORT = process.env.PORT_KEY || 4006

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    connectDB()
})