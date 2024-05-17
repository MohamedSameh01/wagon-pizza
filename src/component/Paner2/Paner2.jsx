/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import "./Paner2.css"
import PanerBoy from "../../assets/images/panerBoy2.jpg"

const Paner2 = () => {
    return (
        <section className="section">
        <h1 className="component-label highlight"> paner </h1>
            <div className="container">
                <div className="offer__wrapper">
                    <div className="offer__img">
                        <img src={ PanerBoy } alt="Im Wangen's Pizza" />
                    </div>

                    <div className="offer__content">
                        <h2>
                            <span className="highlight">Im Wangen's Pizza</span> geniessen Sie exzellente Speisen und Getränke in einem entspannten Ambiente.
                            Wir vereinen gekonnt die raffinierte italienische Esskultur mit dem Schweizer Lebensstil.
                        </h2>
                        {/* <button className="view__more-btn">Order Now</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Paner2