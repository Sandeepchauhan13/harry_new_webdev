import React,{useState} from 'react'

function App() {
  const [name, setName] = useState("Harry")
  const [ form, setForm] = useState({})
  const handleClick = ()=>{
    alert("I am clicked");
  }
  const handleMouseOver = ()=>{
    // alert("Mouse over the box")
  }
  const handleChange = (e)=>{
    // setName (e.target.value)
    // handling multiple inputs of form 
    setForm({...form, [e.target.name] : e.target.value })
    console.log(form);
  }
  return (
    <>

    <button onClick={handleClick}>Click me </button>
    <div className="red" onMouseOver={handleMouseOver}>
      I am red 
    </div>
    <input type="text" name= 'email' value={form.email?form.email:"" } onChange={handleChange} />
    <input type="text" name= 'phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
      
    
  )
}

export default App
