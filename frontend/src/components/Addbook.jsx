// import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addbook = () => {
  let [inputs,setinputs]=useState({
    name:'',
    description:'',
    author:'',
    price:"",
    available:"true",
    image:""

  })
 const [checked, setchecked] = useState(false)
 const history=useNavigate()
  
  let handlechange=(e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
    // console.log(e.target.name,"value",e.target.value)
  }

  let sendrequest= async ()=>{
  await  axios.post('http://localhost:5000/books',{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:String(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
  }


let checking=()=>{
  setchecked(!checked)
}

  let handlesubmit=((e)=>{
e.preventDefault()
console.log(inputs,checked)
sendrequest().then(()=>history('/books'))
  })
  return (

    
    <div>
    
     <form onClick={handlesubmit} >
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
        <FormControlLabel control={<Checkbox checked={checked} onChange={checking} />} label="Available" />
          <Button style={{display:"flex",justifyContent:"center",translate:"280px"}} type='submit' variant='contained'>Add Book</Button>
          </Box>
      </form>
    
      
    </div>
  )
}

export default Addbook