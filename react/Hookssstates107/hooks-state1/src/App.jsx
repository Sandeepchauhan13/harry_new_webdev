import {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [count, setCount] = useState(0)

  return (
    <>
   <div className="count">
    The initial value of a count is {count}
    <button onClick={()=>{setCount("avi and adi")}}> click me</button>
   </div>
    </>
  )
}

export default App
