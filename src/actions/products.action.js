import action from "../constants/product.constant";

const {SET_PRODUCTS, SET_LOADING, SET_ERROR, RESET_PRODUCTS, RESET_ALL} = action;


const setProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
   try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({
      type : SET_PRODUCTS,
      payload : data
    })
   }catch(e){
    dispatch(setError(e.message))
   }finally{
    dispatch(setLoading(false))
   }
  }
}
const setLoading = (value) => {
  return {
    type : SET_LOADING,
    payload : value
  }
}

const setError = (value) => {
  return {
    type : SET_ERROR,
    payload : value
  }
}

const resetProduct = () => {
  return {
    type : RESET_PRODUCTS
  }
}

const resetAll = () => {
  return {
    type : RESET_ALL
  }
}

export {setProducts, setLoading, setError, resetProduct, resetAll}