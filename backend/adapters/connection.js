const mongoose = require('mongoose')
 require('dotenv').config()

let url=process.env.url
let app=mongoose.connect(url)
.then(()=>{
console.log("mongoDB connected succesfully")
})
.catch(()=>{
    console.log(err)
})

