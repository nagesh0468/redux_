import { combineReducers, createStore } from "redux";
import Countreducer from "./Count.reducer";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
  count : Countreducer,
  user : UserReducer
})

 const store = createStore(rootReducer);


 export default store;