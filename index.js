require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const auth = require('./routes/authentication')
const reg = require('./routes/registration')
const bodyParser = require('body-parser');



require('./config/connection')

app.use(bodyParser.urlencoded({ extended: true }))  
   .use(bodyParser.json());

app.use('/authentication',auth)
app.use('/registration',reg)



app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`)
})