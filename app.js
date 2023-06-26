const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()


// middleware
app.use(cors())
app.use(express.json)

// mongodb connection
mongoose.connect('mongodb://localhost/hospitalDB')

const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Connected to database successfully.....')
})


// listen
app.listen(3600,()=>{
    console.log('Server running on port 3600')
})