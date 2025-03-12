import action from "../constants/user.constant";

const {SET_NAME, SET_AGE} = action;

const initialState = {
  name : "",
  age : ""
}

const UserReducer = (state = initialState , action) => {
switch(action.type){
  case SET_NAME :
    return {
      ...state,
      name : action.payload
    }
    case SET_AGE :
      return {
        ...state,
        age : action.payload
      }
      default :
      return state;
}

}
export default UserReducer;