const book  = require('../models/books.model')


let addbook= async (req,res,next)=>{
try{
let {name,author,description,price,available,image}=req.body

let addingbook=await book.create({name,author,description,price,available,image})
res.status(200).json({error:false,message:"books added succesfully",data:addingbook})
}
catch(err){
return err
}


    
}



let getbooks=async (req,res,next)=>{
    let gettingbooks=await book.find()
    res.status(200).json({gettingbooks})
   

    if(!gettingbooks){
        res.status(200).json({error:false,message:"books not finded "}) 
    }
    
}


let getbyid= async(req,res,next)=>{

let id=req.params.id
try{
let idbook=await book.findById(id)

res.status(200).json({data:idbook})

if(!idbook){
    return res.status(400).json({message:"book not found"})
}
}
catch(err){
console.log(err)
}
}



let updatebyid=async (req,res,next)=>{
    
    let id=req.params.id
    let {name,author,description,price,available,image}=req.body

    let updating=await book.findByIdAndUpdate(id,{name,author,description,price,available,image})
   

    if(!updating){
        return res.status(400).json({message:"book not found"})
    }
    res.status(200).json({message:"updated successfully",data:updating})
}

let deletebook=async (req,res,next)=>{

    let id=req.params.id

    let deleting=await book.findOneAndDelete(id)
  
    if(!deleting){
        res.status(400).json({message:"not found with given id"})
    }
    res.status(200).json({message:"deleted succesfully",data:deleting})

}

module.exports={
    addbook,
    getbooks,
    getbyid,updatebyid,
    deletebook
}