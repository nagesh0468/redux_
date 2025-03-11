import React from 'react'
import { createStore } from 'redux'

let initialState = {
  count : 0,
}
const reducer = (preState = initialState, action) =>{
  switch(action.type){
    case "add" : {
       let value = {
       count : preState.count + 1
       }
       return value;
    }
    case "sub" : {
      let value = {
      count : preState.count - 1
      }
      return value;
   }
   default :
   return preState;
  }
  
}
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState()
  console.log("updated state", state)
})


store.dispatch({
  type : "add"
})
store.dispatch({
  type : "sub"
})
store.dispatch({
  type : "add"
})
store.dispatch({
  type : "add"
})
store.dispatch({
  type : "add"
})





function Redux() {
  return (
    <div>
      <h1>redux</h1>
    </div>
  )
}

export default Redux
export {store};