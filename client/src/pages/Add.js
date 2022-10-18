import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Add() {
  const navigate=useNavigate()
  const[input,setInput]=useState({
    name: "",
    desc: "",
    image: "",
    price: null
  
  })

  function handleInput(e){
    setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  console.log(input)

 async function addDetails(e){
  e.preventDefault()
    try{
await axios.post("http://localhost:3001/books",input)
navigate("/")

    }catch(err){
      console.log(err)
    }
  }
  function Navigatetohome(){
    navigate("/")
    }

  return (
    <div className='addContainer'>
  <div className='addDetails'>
<h1>Add Books to Database</h1>

<input type="text"  placeholder='name' name='name' onChange={handleInput}/>
<input type="text"  placeholder='desc' name='desc' onChange={handleInput}/>
<input type="number"  placeholder='price' name='price' onChange={handleInput}/>
<input type="text"  placeholder='image-link' name='image' onChange={handleInput} />
<button onClick={addDetails}>Add</button>

</div>





    </div>
  )
}

export default Add