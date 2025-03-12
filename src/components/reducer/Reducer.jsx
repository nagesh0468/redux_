import React, { useReducer } from 'react'


let counter = {
  count : 0,
}
let reducer = (initial = counter, action) =>{
  
    switch(action.type){
      case 'add':{
        let value = {
          ...initial,
          count : initial.count + 1,
        }
        return value;
      }
      case 'sub':{
        let value = {
          ...initial,
          count : initial.count - 1,
        }
        return value;
      }
      default :
      return initial;
    }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, counter);
  
  const handleDecrement = () => {
      dispatch({
        type : "sub",
      })
  }
  const handleIncrement = () => {
    dispatch({
      type : "add",
    })
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement} >increment</button>
      <button onClick={handleDecrement} >decrement</button>
      
    </div>
  )
}

export default Reducer
