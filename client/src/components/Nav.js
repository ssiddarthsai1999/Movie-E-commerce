import {useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import {createUserWithEmailAndPassword , onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../firebase"
import { cartTotalSelector } from '../redux/selectors'
import { useSelector } from 'react-redux'

function Nav() {
  const [user,setUser]=useState("")
  const totalquantity = useSelector(cartTotalSelector)
  
  async function signout(){
    await signOut(auth)
  }
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])
  return (
    <div className="section1">
    <div className="navContainer">
    <div className="navelements">
<div className="logo">
    <h1><i class="fa-sharp fa-solid fa-book"></i></h1>
</div>
<span>Username:{user ? user.email : "Not Logged In"}</span>
<div className="navlinks">
    <ul>
<Link to="/"  style={{ textDecoration: 'none' }}>   <li><i class="fa-solid fa-house"></i></li></Link>

{/* <Link to="/add" style={{ textDecoration: 'none' }} >   <li><i class="fa-sharp fa-solid fa-plus" ></i></li></Link> */}
<Link to="/register" style={{ textDecoration: 'none' }}>   <li><i class="fa-solid fa-registered"></i></li></Link>
<Link to="/login" style={{ textDecoration: 'none' }}>   <li><i class="fa-solid fa-right-to-bracket"></i></li></Link>
<Link to="/cart" style={{ textDecoration: 'none' }} className="cartLink">   <li><i class="fa-solid fa-cart-shopping"></i>
  {totalquantity>0?   <span>{totalquantity}</span>:"" }

  </li></Link>

  





{user?<li onClick={signout}><i class="fa-solid fa-right-from-bracket"></i></li> : "" }



 
    </ul>
</div>
</div>
    </div></div>
  )
}

export default Nav