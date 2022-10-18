import React from 'react'

function Pagination({totalPosts, postsperpage,paginate,currentpage}) {
    const pages=[]

    for ( let i=1; i<=Math.ceil(totalPosts/postsperpage);i++){
        pages.push(i)
    }
   
  return (
    <div className='pagin'>
{pages.map((page,index)=>{
    return <button onClick={()=>paginate(page)}
    className={page==currentpage? "active": ""}
     key={index}>{page}</button>
})}


    </div>
  )
}

export default Pagination