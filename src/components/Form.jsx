import React, { useRef, useState } from "react";

function Form() {
    const userReff=useRef()
    const submitLogin=()=>{
        console.log(userReff);
    }
  return (
    <div className="login">
      <h1>Login Panel</h1>
      <input onChange={(e)=>userReff.userName=e.target.value} type="text" placeholder="Enter UserName.." />
      <input onChange={(e)=>userReff.password=e.target.value} type="password" placeholder="Enter Password.." />
      <button onClick={submitLogin}>Submit</button>
    </div>
  );
}

export default Form;
