import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
  data : [],
  error : null,
  loading : false,
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch products";
        state.loading = false;
      });
  },

})

// export const fetchProducts = () => {
//   return async(dispatch, getState) =>{
//     dispatch(setLoading(true));
//     try{
//        const response = await fetch('https://fakestoreapi.com/products');
//        const data = await response.json();
//        dispatch(setProduct(data));
//        dispatch(setLoading(false))
//     }catch(e){
//       dispatch(setError(e.message));
//       dispatch(setLoading(false))
//     }
//   }
// }

export default productSlice.reducer;
export const {setError,setLoading,setProduct} = productSlice.actions;