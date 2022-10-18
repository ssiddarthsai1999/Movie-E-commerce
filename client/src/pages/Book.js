import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import  {add}  from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "../App.css"

function Book() {

const dispatch= useDispatch()
    const[books,setbooks]=useState([])
    const { id }= useParams()
    const navigate=useNavigate()

    async function fetchData(){
    try{
   const res=await axios.get("http://localhost:3001/books/"+id)
   setbooks(res.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData()
    },[])

    function addtocart(bookid){
      dispatch(add(bookid))
    }

    function Navigatetohome(){
    navigate("/")
    }

  return (
    <div className='bookContainer'>
    

 
{books.map((book)=>(
    <div key={book.id} className="bookEach">
    
    <div className='bookImg'>
    <img src={book.image} alt="" /></div>
    <div className='bookDetails'>
    <button onClick={Navigatetohome} className='getback'>Get back</button>
    <h1><span> <br></br></span> {book.name}</h1>
    <h2>Description:<span> <br></br> </span> {book.desc}</h2>
    <h3>${book.price}</h3>
    <button  className='addtocart' onClick={()=>addtocart(book)}>Add to cart</button>
 
    </div>
   




    </div>
))}
    
    
    
  

</div>
)
  }
export default Book