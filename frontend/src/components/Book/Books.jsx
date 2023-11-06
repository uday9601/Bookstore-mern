import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
const Books = () => {
    let [books,setbooks]=useState([])
     function demo(){
        axios.get(" http://localhost:5000/books")
     .then((response)=>{
setbooks(response.data.gettingbooks)
console.log(response.data.gettingbooks)
     })
  .catch((err)=>{
console.log(err)
  })
   
    } 

    useEffect(()=>{
demo()
    },[])

    
  return (
    <div className='newbooks'>
        {books && books.map((a,i)=>{
        return(<div className='book' key={i}>
        <Book  book={a}/>
        </div>
       
        )
        
       })}
    </div>
  )
}

export default Books