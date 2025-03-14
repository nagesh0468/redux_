
import action from "../constants/product.constant";

const {SET_PRODUCTS, SET_LOADING, SET_ERROR, RESET_PRODUCTS, RESET_ALL} = action;

const initialState = {
  data : [],
  loading : true,
  error : null
}

const productReducer = (state = initialState, action) =>{

  switch(action.type){
    case SET_PRODUCTS : 
    return {
      data : action.payload,
      loading : null,
      error : false,
    }
    case SET_LOADING :
      return {
        ...state,
        loading : action.payload
      }
      case SET_ERROR : 
      return {
        ...state,
        error : action.payload
      }
      case RESET_PRODUCTS :
        return {
          ...state,
          data : []
        }
        case RESET_ALL :
          return {
            data : [],
            loading : false,
            error : null
          }
     default :
      return state;

  }


} 

export default productReducer;