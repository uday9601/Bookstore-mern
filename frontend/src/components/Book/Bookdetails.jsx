import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Bookdetails = () => {
  const [inputs, setinputs] = useState({})
  
  let id=useParams().id
  let [checked,setChecked]=useState(false)

  let history=useNavigate()
  
 

  
  console.log(id)
  useEffect(()=>{
let fetchhandler=async ()=>{
  await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then(data=>setinputs(data.book))
}
fetchhandler()
  },[id])

let sendrequest= async()=>{
await axios.put(`http://localhost:5000/books${id}`,{
  name:String(inputs.name),
  author:String(inputs.author),
  description:String(inputs.description),
  price:String(inputs.price),
  image:String(inputs.image),
  available:Boolean(checked)
}).then(res=>res.data)
}

let handlesubmit=(e)=>{
  e.preventDefault()
  sendrequest().then(()=>history('/books'))
}

let handlechange=(e)=>{
  console.log(e);
}

  return (
    <div>
{inputs &&<form onClick={handlesubmit} >
     <Box  maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft={'auto'}marginRight={'auto'} marginTop={10}>
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name'/>
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='author'/>
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handlechange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handlechange} type='text' margin='normal' fullWidth variant='outlined' name='image'/>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
          <Button style={{display:"flex",justifyContent:"center",translate:"280px"}} type='submit' variant='contained'>update Book</Button>
          </Box>
      </form>}
    </div>
  )
}

export default Bookdetails