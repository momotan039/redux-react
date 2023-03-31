import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handelDecrement = () => setCount(count - 1);
    const handelIncrement = () => setCount(count + 1);
  return (
   <>
    <h1>Count:{count}</h1>
        <button onClick={handelIncrement}>plus 1</button>
        <button onClick={handelDecrement}>minus 1</button>
   </>
  )
}

export default Counter