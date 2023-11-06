const mongoose = require('mongoose')



let bookSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

module.exports=new mongoose.model("book",bookSchema)