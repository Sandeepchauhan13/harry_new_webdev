import React, {useState} from 'react'
import './App.css';

const App = () => {
  const[name, setName] = useState("harry")
  const[form, setForm] = useState({})
  const handleClick = ()=>{
    alert("Hey I am clicked")
  }
  const handleMouseOver = ()=>{
    // alert("mouse over the box")
  }

  const handleChange=(e)=>{
    // setName(e.target.value)
    // ek hi handle change input se multiple inputs  ko control krna 
    // form handling in react 
    setForm({...form, [e.target.name] : e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button">
<button  onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>
I  am red div 
      </div>
      {/* input value can be changed when we make handle on change function  */}
      {/* form handling in react important concept  */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
