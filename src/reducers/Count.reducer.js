import action from "../constants/Count.constant";

const { INCREMENT, DECREMENT, RESET, SET_TOTAL } = action;

const initialState = {
  count : 0,
  total : 0
}

const Countreducer = (state = initialState, action) => {
  switch (action.type) {
case INCREMENT :
  return {
    ...state,
    count : state.count + action.payload
  }
  case DECREMENT : 
  return {
    ...state,
    count : state.count - action.payload
  }
  case RESET : 
  return {
    ...state,
    count : 0,
    total : 0
  }
  case SET_TOTAL :
    return {
      ...state,
      total : action.payload
    }
    default :
    return state

  }
}

export default Countreducer;