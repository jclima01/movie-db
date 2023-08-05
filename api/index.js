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
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


app.use('/api/auth', AuthRouter )
app.use('/api/review', ReviewRouter )
app.use('/api/user', UserRouter )


//Express  PORT and listening
const PORT = process.env.PORT_KEY || 4006

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    connectDB()
})