import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <>
    {/* overflow hidden is used to keep all the things inside the card  */}
      <div className="card" style={{overflow: 'hidden'}}> 
      {/* <div className="card" >  */}
        <img src="https://t4.ftcdn.net/jpg/05/56/30/03/360_F_556300316_yzdmBXMPGTslQfvuNJMbkC8x2yBbcp0u.jpg"
         alt="" width={180} style={{border: "2px solid black"}} />
        {/* jsx main css use karte hen style = {{}} double curly barces use hoti hai  */}
        {/* props.title title props esse use karte hen jab html main javascript use karte hen then use {} */}
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default Card
