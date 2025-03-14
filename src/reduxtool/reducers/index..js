import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../counter/counter.slice'
import productSlice from '../counter/products.slice'
const store = configureStore({
  reducer : {
  counter : counterSlice,
  products : productSlice
  }
})

export default store