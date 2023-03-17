import { createSlice } from "@reduxjs/toolkit";

export const cartStore=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        
    },
    reducers:{
      carts:(state,actions)=>{
        state.cartItems=state.payload
      }
    }

})

export const {carts}=cartStore.actions

export default cartStore.reducer