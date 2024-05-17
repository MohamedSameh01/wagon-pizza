// import React from 'react'
import "./About.css";
import About_image from "../../assets/images/aboutimage (2).png";
const About = () => {
  return (
    <div className="about">
      <h1 className="component-label">
        <span className="highlight">About</span>
      </h1>
      <div className="container">
        <div className="image">
          <img src={About_image} alt="" />
        </div>
        <div className="text">
          <h2>Ein gemütlicher Ort für kulinarischen Genuss.</h2>
          <p>
            Für ein unvergleichliches Wohlfühlessen <br /> empfehlen wir stets
            eine Kombination aus Gemüse, <br /> Maisbrot und köstlich
            Frittiertem.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About