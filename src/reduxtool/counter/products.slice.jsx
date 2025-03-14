import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data : [],
  error : null,
  loading : false,
}

const productSlice = createSlice({
  name : "products",
  initialState,
  reducers : {
    setProduct : (state, action)=>{
      state.data = action.payload
    },
    setError : (state, action) => {
      state.error = action.payload
    },
    setLoading : (state, action) => {
      state.loading = action.payload
    }
  }

})

export default productSlice.reducer;
export const {setError,setLoading,setProduct} = productSlice.actions;