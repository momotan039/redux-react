import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../redux/actions/counterActions';

function Counter() {
    const {count}=useSelector(state=>state)
    const dispatch=useDispatch()
    const handelDecrement = () => dispatch(Increment);
    const handelIncrement = () => dispatch(Decrement);
  return (
   <>
        <h1>Count:{count}</h1>
        <button onClick={handelIncrement}>plus 1</button>
        <button onClick={handelDecrement}>minus 1</button>
   </>
  )
}

export default Counter