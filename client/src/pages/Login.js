import  {useState}from 'react'
import { Link } from 'react-router-dom'
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

function Login() {
const[wrongpassword, setwrongpassword]= useState("")

  function registerEmail(e){
  setEmail(e.target.value)
}
function registerPassword(e){
  setPassword(e.target.value)
}
async function registerButton(){
  try{
    const user= await signInWithEmailAndPassword(
      auth,
      email,
    password

    )
    console.log(user)
  }catch(err){
console.log(err.message)
setwrongpassword(err.message)
    
  }
  

}
  const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
  return (
    <div className='addContainer'>
  <div className='addDetails'>
<h1>LOGIN</h1>

<input type="email"  placeholder='Email' name='email'  onChange={registerEmail}/>
<input type="password"  placeholder='Password' name='password'  onChange={registerPassword}/>
<button onClick={registerButton}>Login</button>
<Link to="/register" style={{textDecoration: "none"}}>
<h4>Don't have an account? Sign up here</h4>
</Link>
<h3>{wrongpassword}</h3>

</div>
</div>
  )
}

export default Login