import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api";

function Form() {
    const userReff=useRef()
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user)
    const submitLogin=()=>{
        // dispatch(loginUser(userReff))
        login(userReff,dispatch)
    }
  return (
    <div className="login">
      <h1>Login Panel</h1>
      <input onChange={(e)=>userReff.userName=e.target.value} type="text" placeholder="Enter UserName.." />
      <input onChange={(e)=>userReff.password=e.target.value} type="password" placeholder="Enter Password.." />
      {
        user.loading?'Loading...':<button onClick={submitLogin}>Submit</button>
      }
      {
        user.error.status&&<h1>{user.error.message}</h1>
      }
    </div>
  );
}

export default Form;
