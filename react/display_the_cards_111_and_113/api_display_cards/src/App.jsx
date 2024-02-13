import React, { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'

const App = () => {
  const [cards, setCards] = useState([])

  const fetchData = async ()=>{

    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }
  
  useEffect(() => {
   fetchData ()
  }, [ ])
  
  return (
    <>
      <Navbar />
      <div className="container flex gap-3 flex-wrap">
        
{cards.map((card)=>{
  return <div key={card.id} className="card border-1 border border-blue-400 w-32">
  <h1>title: {card.title}</h1>
  <p>About: {card.about}</p>
  <p>By {card.userId} </p>
    </div>
})}
        
      </div>
    </>
  )
}

export default App
