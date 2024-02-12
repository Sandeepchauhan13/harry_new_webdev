import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <>
      <div className="card" style={{overflow: 'hidden'}}>
       
        <img width={180}
        src="https://t4.ftcdn.net/jpg/05/56/30/03/360_F_556300316_yzdmBXMPGTslQfvuNJMbkC8x2yBbcp0u.jpg" alt=""  style={{border: '2px solid red'}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

    </>
  )
}

export default Card
