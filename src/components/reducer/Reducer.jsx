import React, {  useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../../reduxtool/counter/counter.slice'
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
  const value = useSelector((state) => state.counter.value);
  const dispatched  = useDispatch()
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
      <h1>redux tool kit</h1>
      <h2>counter : ({value})</h2>
      <button onClick={()=> dispatched(increment(1))} >inc</button>
      <button onClick={()=> dispatched(decrement(1))} >dec</button>
    </div>
  )
}

export default Reducer
