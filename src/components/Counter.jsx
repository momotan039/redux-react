import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handelDecrement = () => dispatch(decrement());
  const handelIncrement = () => dispatch(increment());
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handelIncrement}>plus 1</button>
      <button onClick={handelDecrement}>minus 1</button>
    </>
  );
}

export default Counter;
