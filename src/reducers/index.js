import { applyMiddleware, combineReducers, createStore } from "redux";
import Countreducer from "./Count.reducer";
import UserReducer from "./user.reducer";
import productReducer from "./products.reducer"; 
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  count : Countreducer,
  user : UserReducer,
  products : productReducer
})

 const store = createStore(rootReducer, applyMiddleware(thunk));


 export default store;