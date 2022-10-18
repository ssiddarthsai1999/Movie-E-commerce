import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,{payload}) => {
      const {id }= payload
      const find = state.find((item)=>item.id===id)
      if (find){
        return state.map((item)=>
          item.id===id
          ?{
            ...item,
            quantity: item.quantity=1
          }
          : item
        )
      }else {
        state.push({...payload, quantity:1})
      }
    },
    remove: (state,action) => {
      return state.filter((item)=>item.id !== action.payload)
    },
increment:(state, {payload})=>{
  return state.map((item)=>
  item.id===payload
  ?{
    ...item,
    quantity:item.quantity+1
  }
  :item
  )
},
decrement:(state, {payload})=>{
  return state.map((item)=>
  item.id===payload&& item.quantity>1
  ?{
    ...item,
    quantity:item.quantity-1
  }
  :item
  )
},
clearcart:(state)=>{
 return  state=[]
}


    
  },
})

export const { add, remove,increment,decrement,clearcart} = cartSlice.actions

export default cartSlice.reducer