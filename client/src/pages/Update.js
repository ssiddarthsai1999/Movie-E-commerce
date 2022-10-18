import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



function Update() {

const [addbooks,setaddBooks]=useState({
  name:"",
  desc: "",
  image : "",
  price : null
})
const navigate=useNavigate()
function handleChange(e){
  setaddBooks(prev=>({...prev,[e.target.name]: e.target.value}))
}
console.log(addbooks)
async function handleClick(e){
  e.preventDefault()
  try{
const res= await axios.post("http://localhost:3001/books",addbooks)
navigate("/")
  }catch(err){
    console.log(err)
  }
}

  return (
    <div>
<h1>update book</h1>
<input type="text" placeholder='name' name='name' onChange={handleChange}/>
<input type="text" placeholder='desc' name='desc' onChange={handleChange}/>
<input type="file" placeholder='image' name='image' onChange={handleChange}/>
<input type="number" placeholder='price' name='price' onChange={handleChange}/>

<button onClick={handleClick}>add</button>



    </div>
  )
}

export default Update