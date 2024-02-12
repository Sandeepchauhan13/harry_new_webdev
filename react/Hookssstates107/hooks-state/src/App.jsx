import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className="count"> The value of count is {count}</div>
      {/* <button onClick={()=>{setCount(count + 1)}}>Update count</button> */}
      {/* #here we can use setCount(count * 2) this is multiply by 2 any thing i can use her */}

      <button onClick={()=>{setCount(count * 2)}}>Update count</button>

      {/* #count can be used as i can set any value when i click it will set 131099 */}
      {/* <button onClick={()=>{setCount(131099)}}>Update count</button> */}
       
    </>
  )
}

export default App
