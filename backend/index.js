const express = require('express')
require('dotenv').config()
require('../backend/adapters/connection')
const bookroutes = require('../backend/routes/books.routes')
const cors = require('cors')


let app=express()


app.use(express.json())
app.use(cors())

app.use('/books',bookroutes)


let port=process.env.port
app.listen(port,()=>{
    console.log(`server connected to ${port}`)
})