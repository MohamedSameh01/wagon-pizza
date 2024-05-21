/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import "./Paner2.css"
import PanerBoy from "../../assets/images/panerBoy2.jpg"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Paner2 = () => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Animation triggers only once
      threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="animated-component"
      >
        <section className="section panner">
          <h1 className="component-label highlight"> paner </h1>
          <div className="container">
            <div className="offer__wrapper">
              <div className="offer__img">
                <img src={PanerBoy} alt="Im Wangen's Pizza" />
              </div>

              <div className="offer__content">
                <h2>
                  <span className="highlight">Im Wangen's Pizza</span> geniessen
                  Sie exzellente Speisen und Getränke in einem entspannten
                  Ambiente. Wir vereinen gekonnt die raffinierte italienische
                  Esskultur mit dem Schweizer Lebensstil.
                </h2>
                {/* <button className="view__more-btn">Order Now</button> */}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    );
}

export default Paner2