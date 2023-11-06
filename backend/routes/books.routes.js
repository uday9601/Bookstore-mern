const express = require('express')
const {addbook,getbooks,getbyid,updatebyid,deletebook}  = require('../controllers/books.controller')

let router=express.Router()


router.post('/',addbook)
router.get('/',getbooks)
router.get('/:id',getbyid)
router.put('/:id',updatebyid)
router.delete('/:id',deletebook)

module.exports=router