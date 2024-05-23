/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.png";
import "./Footer.css";
import Instgram from "../../assets/images/instgram.jpg";
import Twitter from "../../assets/images/Twitter.jpg";
import Facebook from "../../assets/images/Facebook.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

   const server = import.meta.env.VITE_SERVER;
  const [delivers, setDilevers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${server}/api/Company/GetCompanyData`);
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDilevers(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="animated-component"
    >
      <footer className="section footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="social-icons">
                <a href="www.google.com">
                  <img src={Facebook} alt="facebook" className="icon" />
                </a>
                <a href="www.google.com">
                  <img src={Twitter} alt="twitter" className="icon" />
                </a>
                <a href="www.google.com">
                  <img src={Instgram} alt="instgram" className="icon" />
                </a>
              </div>
            </div>
            <div className="footer__box">
              <h3 className="footer__link-title">Uber Uns...</h3>
              <ul className="footer__menu">
                <li className="footer__menu-item">
                  <p className="footer__link">
                    {" "}
                    is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer__box">
              <h3 className="footer__link-title">Arbeitszeiten</h3>
              <ul className="footer__menu">
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.openTime1}</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.openTime2}</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.openTime3}</p>
                </li>
              </ul>
            </div>
            <div className="footer__box">
              <h3 className="footer__link-title">Lieferzeiten</h3>
              <ul className="footer__menu">
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.delivery1}</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.delivery2}</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.delivery3}</p>
                </li>
                <li className="footer__menu-item">
                  <p className="footer__link">{delivers?.data?.delivery4}</p>
                </li>
              </ul>
            </div>
          </div>
      
          <hr />
          <p className="light-soft">
            Copy Rights @<span className="highlight">Light Soft</span>
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
