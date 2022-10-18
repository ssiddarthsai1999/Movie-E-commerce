import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Posts({ books, searchQuery ,setsearchQuery }) {

  

    async function handleDelete(id){
 try{
          await axios.delete("http://localhost:3001/books/"+id)
          window.location.reload()
        }catch(err){
          console.log(err)
        }
      }
      
    const keys= ["name", "desc"]



    
  return (
    <div className='productsContainer'>



    {books
    .filter((book)=>{
      if(searchQuery===""){
        return book
      }else if
       (keys.some((key)=>book[key].toLowerCase().includes(searchQuery.toLowerCase())))
       
    return ( book)
      })
    
    .map((book)=>(
      <div key={book.id} className="products">
      <Link to={`book/${book.id}`}  style={{ textDecoration: 'none' }}>
      <img src={book.image} alt="" />
      <div className='productName'>
    <p>{book.name}</p></div>
    </Link>
    
    {/* <button onClick={()=>handleDelete(book.id)} className="removeButton"><i class="fa-sharp fa-solid fa-trash"></i></button> */}
    
    </div>
    ))}

   
    
        </div>




  
  )
}

export default Posts