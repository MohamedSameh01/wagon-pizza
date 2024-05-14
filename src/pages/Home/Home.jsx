// import React from 'react'

import About from "../../component/About/About";
import DailyProduct from "../../component/DailyProduct/DailyProduct";
import Garage from "../../component/Garage/Garage";
// import Footer from "../../component/Footer/Footer";
// import Location from "../../component/Location/Location";
// import Nav from "../../component/Nav/Nav";
import Paner from "../../component/Paner/Paner";
import Paner2 from "../../component/Paner2/Paner2";
import Sign from "../../component/Sign/Sign";
import Slider from "../../component/Slider/Slider";
const Home = () => {
  return (
    <div className="home">
      {/* <Nav /> */}
      <Slider />
      <About/>
      <DailyProduct/>
      <Sign />
      <Paner2 />
      <Paner />
      <Garage />
      {/* <Location /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
