// import React from 'react'
import "./Garage.css"
import Garage1 from "../../assets/images/garage1.png"
import Garage2 from "../../assets/images/garage2.png"
import Garage3 from "../../assets/images/garage3.png"

const Garage = () => {
  return (
    <div className="garage">
          <h1>Gratis <span> Parkplätze</span></h1>
        <div className="places container">
            <img src={Garage1} alt="garage1"/>
            <img src={Garage2} alt="garage2"/>
            <img src={Garage3} alt="garage3"/>
        </div>
    </div>
  )
}

export default Garage