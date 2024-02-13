import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

const App = () => {
  const [cards, setCards] = useState([])
    
  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts") 
    let data = await a.json()
    setCards(data)
    // console.log(data)
  }
  // const fetchData = async ()=>{

  //   let a = await fetch("https://jsonplaceholder.typicode.com/posts")
  //   let data = await a.json()
  //   setCards(data)
  //   console.log(data)
  // }

  useEffect(() => {
   fetchData ()
  }, [])
  
  return (
    <>
    <Navbar/>
      <div className="container flex flex-wrap gap-3">
        {cards.map ((card)=>{
       return <div key = {card.id} className="card border border-1 border-blue-700 w-32">
    <h1>Title: {card.title}</h1>
    <p>About: {card.body}</p>
    <p>By: {card.userId}</p>
        </div>

        })}
        
      </div>
    </>
  )
}

export default App
