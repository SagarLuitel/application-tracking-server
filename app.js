const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080

const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express ()
app.use(express.json());

dotenv.config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT))
  .catch(err => console.log(err));



app.get('/',(req,res)=>{
    console.log("root url")
})

app.use(authRoutes)
app.use(blogRoutes)
