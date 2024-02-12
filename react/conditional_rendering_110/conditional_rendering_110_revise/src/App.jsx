import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos]= useState([
    {
      title: "first todo",
      desc: "This is the first todo "
    },
    {
      title: "second todo",
      desc: "this is the second todo"
    },
    {
      title: "third todo",
      desc: "this is the third todo"
    }
  ])

//   const Todo = ({todo})=>{
// return (
//  <div className="border-1 border border-purple-900 m-4">
// <div className="todo">{todo.title}</div>
// <div className="todo">{todo.desc}</div>
//  </div>
// )
//   }

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
      {showBtn? <button> btn is displaying coz toggle button is clicked</button> : <button>it is hiding now</button>}
      <h4 className="text-yellow-300 ">Vite + React</h4>
      {todos.map (todo =>{
        return  <div className="border-1 border border-purple-900 m-4">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
         </div>
      })}
      <div className="card">
        <button className="text-purple-800" onClick={() => setShowBtn(!showBtn)}>
          toggle click
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
