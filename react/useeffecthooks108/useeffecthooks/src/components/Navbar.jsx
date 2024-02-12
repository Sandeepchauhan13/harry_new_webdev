import React,{useEffect} from 'react'


const Navbar = ({color}) => {

     // case: 1 Run on every render
  useEffect(() => {
    alert("welcome to my page i will run on every render")
  }, [])

  // Case: 2  Run only on first render

  useEffect(()=>{
alert ("Hey welcome to my page. This is the first render")
  }, [])

  // case: 3 i am running coz color/count was changed it will run in starting coz initial stage
    useEffect(()=>{
alert ("Color was Changed")
    }, [color])

  // #example of cleanup function 
useEffect (()=>{
  alert("Hey welcome to my page. This is the first render of app.jsx")
  return ()=>{
    alert("component was unmounted")
  }
}, [])

  return (
    <div>
      I am navbar of {color} color heehehe 
    </div>
  )
}

export default Navbar
