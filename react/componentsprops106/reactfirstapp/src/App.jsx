import Card from "./components/Card/Card"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"


function App() {


  return (
    <>
      <Navbar/>
      <div className="cards">

    <Card title="card1" description="this is testing desc"/>
    <Card title="card2" description="this is testing desc"/>
    <Card title="card3" description="this is testing desc"/>
    <Card title="card4" description="this is testing desc"/>
   
      </div>
      <Footer/>
    </>
  )
}

export default App
