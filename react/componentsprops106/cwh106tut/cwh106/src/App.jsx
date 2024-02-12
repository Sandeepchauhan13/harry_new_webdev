import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import React from 'react'


function App() {


  return (
    <>
     <Navbar/>
     <Footer/>
     <div className="cards">
     <Card title="card one" description="card is testing" />
     <Card title="card two" description="card is testing" />
     <Card title="card three" description="card is testing" />
     <Card title="card four" description="card is testing" />

     </div>
     
    </>
  )
}

export default App
