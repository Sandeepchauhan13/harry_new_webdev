import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another Todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: " I am good todo but i am grocery todo"
    }
  ])
  // const Todo = ({todo})=>{
  //   return(
  //     <>
  //     <div className="m-4 border-1 border border-purple-400">
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>

  //     </div>
  //     </>
  //   )
  // }

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
      <h1 className="text-yellow-500">Vite + React</h1>
      {/* {showBtn ? <button>I will show when i am clicked</button> : <button>i  will be showed when clicked</button>} */}
      {showBtn ? <button>I will show when i am clicked</button> : <button> not shown</button>}
      {/* {showBtn && <button>i  will be showed when clicked</button>} */}
      {todos.map(todo=>{ return  <div key={todo.title} className="m-4 border-1 border border-purple-400">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
  
        </div>
        // it can be do like this 
          // return <Todo key={todo.title} todo={todo} />
      })}
      <div className="card">
        {/* this logic is toggle button to hide/show button  */}
        <button className="text-xl text-yellow-400 bg-blue-600" onClick={() => setShowBtn(!showBtn)}>
         Toggle btn
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
