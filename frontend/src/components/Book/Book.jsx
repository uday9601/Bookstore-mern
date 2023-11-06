import { Button } from '@mui/material'
import React from 'react'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Book = (props) => {
  let history=useNavigate()
    let {_id,name,author,description,price,image}=props.book

    let deletehandler= async ()=>{
    await  axios.delete(`http://localhost:5000/books/${_id}`)
    .then(res=>res.data)
    .then(()=>history('/'))
    .then(()=>history('/books'))
    }
  return (
    <div className='book'>
 <img height={'200px'} width={'150px'} src={image} alt="name" />
 <article>by {author}</article>
 <h3>{name}</h3>
 <p>{description}</p>
 <h2>Rs{price}</h2>
 <Button LinkComponent={Link} to={`/books/${_id}`}>update</Button>
 <Button onClick={deletehandler}>Delete</Button>
    </div>
   
  )
}

export default Book