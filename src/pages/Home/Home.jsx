// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Garage from "../../component/Garage/Garage"
import Location from "../../component/Location/Location"
import Nav from "../../component/Nav/Nav"
import Paner from "../../component/Paner/Paner"
import Paner2 from "../../component/Paner2/Paner2"
import Sign from "../../component/Sign/Sign"
const Home = () => {
  return (
    <div className="home">
    <Nav/>
      <Sign />
      <Paner2 />
      <Paner />
      <Garage />
      <Location />
      <Footer />
    </div>
  )
}

export default Home