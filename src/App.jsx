import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handelDecrement=()=>setCount(count-1)
  const handelIncrement=()=>setCount(count+1)
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={handelIncrement}>plus 1</button>
      <button onClick={handelDecrement}>minus 1</button>
    </div>
  )
}

export default App
