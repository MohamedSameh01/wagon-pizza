// import React from 'react'
import "./Paner.css"
import PanerImg from "../../assets/images/paner.png"

const Paner = () => {
  return (
      <section className="section">
          <div className="container">
              <div className="offer__wrapper">
                  <div className="offer__content">
                      <h2>
                          <span className="highlight">Im Wangen's Pizza</span> geniessen Sie exzellente Speisen und Getränke in einem entspannten Ambiente.
                          Wir vereinen gekonnt die raffinierte italienische Esskultur mit dem Schweizer Lebensstil.
                      </h2>

                      <button className="view__more-btn">Order Now</button>
                  </div>

                  <div className="offer__img">
                      <img src={ PanerImg } alt="Im Wangen's Pizza" />
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Paner