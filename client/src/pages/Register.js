import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {auth} from "../firebase"
import {createUserWithEmailAndPassword , onAuthStateChanged ,signOut} from "firebase/auth"


function Register() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")




function registerEmail(e){
  setEmail(e.target.value)
}
function registerPassword(e){
  setPassword(e.target.value)
}
async function registerButton(){
  try{
    const user= await createUserWithEmailAndPassword(
      auth,
      email,
    password

    )
    console.log(user)
  }catch(err){
    console.log(err)
  }
  

}



  return (
    <div className='addContainer'>
  <div className='addDetails'>
<h1>REGISTER</h1>

<input type="email"  placeholder='Email' name='email'  onChange={registerEmail}/>
<input type="password"  placeholder='Password' name='password'  onChange={registerPassword}/>
<button onClick={registerButton}>Register</button>

<Link to="/login" style={{textDecoration: "none"}}>
<h4>Already a user? Sign in here</h4>
</Link>



</div>
</div>
  )
}

export default Register