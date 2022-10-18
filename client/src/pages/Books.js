import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

import Pagination from '../components/Pagination'
import Posts from './Posts'


function Books() {

const[books,setbooks]=useState([])

const[postsperpage,setpostsperpage]=useState(8)
const[currentpage,setcurrentpage]=useState(1)
 const[searchQuery,setsearchQuery]=useState("")

async function fetchData(){
try{
const res=await axios.get("http://localhost:3001/books")
setbooks(res.data)
}catch(err){
    console.log(err)
  }
}

const paginate=(page)=>{
  setcurrentpage(page)
}

const indexoflastpost= currentpage*postsperpage
const indexoffirstpost= indexoflastpost- postsperpage
const currentposts= books.slice(indexoffirstpost,indexoflastpost)

  useEffect(()=>{
  fetchData()
  })
   return (
    <div className='allContainer'>
       <div className='searchandadd'>

       
    <input type="text" className='inputSearch' placeholder='Search...' onChange={(e)=>setsearchQuery(e.target.value)} />
</div>
      <Posts books={currentposts} searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
      <div className='pagination'>

      <Pagination postsperpage={postsperpage} 
      totalPosts={books.length}
      paginate={paginate}
      currentpage={currentpage}
      />
      </div>
     
    </div>

    )
}

export default Books