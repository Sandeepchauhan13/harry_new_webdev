import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor]  = useState(0)

  

  // case: 3 i am running coz color/count was changed it will run in starting coz initial stage
  useEffect(() => {
    alert("count was changed")
    setColor(color + 1)
  }, [count])
  


  
  

  return (
    <>
    <Navbar color={"blue " + "yellow" + color}/>
    <div className="count">
      this is the count {count}
      <button onClick={()=>{setCount(count+2)}}> click</button>
    </div>
    </>
  )
}

export default App
