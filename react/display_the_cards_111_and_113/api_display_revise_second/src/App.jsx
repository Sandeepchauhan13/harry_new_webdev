import React,{useState, useEffect} from 'react'
import Navbar from './Navbar';

const App = () => {
const [ cards, setCards] = useState([])
const fetchData = async ()=>{
  let a = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await a.json();
  setCards(data)
}

useEffect(() => {
fetchData ()
}, [])


  return (
    <>
    <Navbar/>
   <div className="container flex flex-wrap gap-3">
    {/* <div className="card border border-1 border-blue-900 w-24 flex gap-3"> */}
      {cards.map ((card)=>{
       return <div key={card.id} className="card border border-1 border-black w-32">
          <h3 className="text-yellow-400">Title:{card.title}</h3>
          <p>Body: {card.body}</p>
          <p>By:  {card.userId}</p>
        </div>
      })}
    {/* </div> */}
   </div>
    </>
  )
}

export default App
