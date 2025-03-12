import React, { useState } from 'react'
import './redux.css'
import { useDispatch, useSelector } from 'react-redux'
import { incAction, decAction, resetAction, setTotal } from '../../actions/Count.action'
import { nameAction, ageAction } from '../../actions/user.action'

nameAction

function Redux() {
  const count = useSelector((state) => state.count);
  const user =  useSelector((state) => state.user);
  

  const dispatch = useDispatch()
  const [num, setNum ]  = useState({
    total : 0,
    name : "",
    age : ""
  });

  const {total, name, age } = num;

const handleChange = (e) => {
  const {name, value} = e.target
  setNum((pre) => ({
    ...pre,
    [name] : value
  }))
}

  return (
    <div className='container'>
      <div className='row1' >
  <h1>counter</h1>
  <h3>counter : ({count.count}) </h3>
  <h3>total : ({count.total}) </h3>
  <input type="text" name='total' value={total} onChange={handleChange} />
  <button onClick={() => dispatch(incAction(10))} >inc</button>
  <button onClick={() => dispatch(decAction(10)) } >dec</button>
  <button onClick={() => dispatch(resetAction())} >reset</button>
  <button onClick={() => dispatch(setTotal(total))} >setTotal</button>
      </div>
      <div className='row2'>
        <h1>user</h1>
        <h3>name: ({user.name})</h3>
        <h3>age : ({user.age})</h3>
        <input type="text" name='name' value={name} onChange={handleChange}  />
        <input type="text" name='age' value={age} onChange={handleChange} />
        <button onClick={() => dispatch(nameAction(name))}>setName</button>
        <button onClick={() => dispatch(ageAction(age))}>setAge</button>
      </div>
    </div>
  )
}

export default Redux
