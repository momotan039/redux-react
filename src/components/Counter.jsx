import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  fetchCounterAction,
  incrementAction,
} from "../redux/actions/counterActions";

function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handelDecrement = () => dispatch(incrementAction);
  const handelIncrement = () => dispatch(decrementAction);
  const handelFetchCounter = (e) => fetchCounterAction(dispatch,e.target);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handelIncrement}>plus 1</button>
      <button onClick={handelDecrement}>minus 1</button>
      <button onClick={handelFetchCounter}>fetch counter from api for 3 seconds</button>
    </>
  );
}

export default Counter;
