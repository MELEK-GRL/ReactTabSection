
import { configureStore } from "@reduxjs/toolkit";
import cartStore from './cartStore'



const store=configureStore({
    reducer:{
       cart:cartStore,
    }
})

export default store