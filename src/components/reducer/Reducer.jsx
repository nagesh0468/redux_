import React, { useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'


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
  const value = useSelector((state) => {
      return state;
  })

  const dis = useDispatch();
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
      <div>
        <h1>redux</h1>
        <h3>{value.count}</h3>
        <button onClick={() =>{
          dis({ type: "add" })
        }}>inc</button>
        <button onClick={() =>{
          dis({ type: "sub" })
        }}>dec</button>
      </div>
    </div>
  )
}

export default Reducer
