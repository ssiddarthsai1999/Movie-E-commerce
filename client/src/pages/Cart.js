import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove,increment,decrement ,clearcart} from '../redux/cartSlice'
import { cartTotalPriceSelector } from '../redux/selectors'
import { cartTotalSelector } from '../redux/selectors'
import "../App.css"
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch=useDispatch()
  const totalprice= useSelector(cartTotalPriceSelector)
  const totalquantity= useSelector(cartTotalSelector)
const books= useSelector((state=>state.cart))

function handleRemove(bookid){
  dispatch(remove(bookid))
}

function handleIncrement(bookid){
  dispatch(increment(bookid))
}

function handleDecrement(bookid){
  dispatch(decrement(bookid))
}
function handleClear(){
  dispatch(clearcart())
}



if( totalquantity>0){
  return (
    <div className='cartContainer'>
    <h1>Cart</h1>
  {books.map((book)=>{
  const totalperitem= book.quantity*book.price
 return(

  <div className='cartItemInCart'>
<img src={book.image} alt="" />
<h3>{book.name}</h3>
<h3>${book.price}</h3>
<button onClick={()=>handleDecrement(book.id)} className="decrement">-</button>
<h4>{book.quantity}</h4>
<button onClick={()=>handleIncrement(book.id)} className="increment">+</button>
<h3>Total : ${totalperitem}</h3>
<button onClick={()=>handleRemove(book.id)} className="remove">Remove</button>
</div>
 )})}
 <button className='clearcart' onClick={handleClear}>Clear Cart</button>
<div className='pricedetails'>
<h3>Quantity: {totalquantity}</h3>
<h3>Total : ${totalprice}</h3>

</div>
<button className='checkout'>Proceed to Checkout</button>

    </div>
    )
    }
    else if (totalquantity===0){
  return (

    <div>
 
    <div>

    <h1 className='noitems'>No items were added to the cart</h1>
    
  <Link to="/" className='additemstocartincart'> <h3>Click here to add items</h3></Link>

    </div></div>
  )
}


}

export default Cart