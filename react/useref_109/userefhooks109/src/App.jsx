import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

// dom element ko access using useREf 
const btnRef = useRef()

// ref is used on two cases one is a.current value while rerendering and second is btnref to change color through ref and to hide etc .. 
// useCase 1  rerendering value persist karti hai 
// useCase 2 through useRef dom element ko access kar sakte hen 

useEffect(() => {
  console.log(`First rendering`)
btnRef.current.style.backgroundColor = "yellow"
}, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* made here new button to hide above button  */}
      <button onClick={()=>{btnRef.current.style.display= "none"}}>Change me</button>
    </>
  )
}

export default App
