/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import "./Footer.css"

const Footer = () => {

const server = "https://admin.lightsoft.ch/";
const [delivers, setDilevers] = useState({});
const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${server}api/Company/GetCompanyData`);
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
    <footer className="section footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <p>Subscribe to our newsletter</p>
          </div>

          <div className="footer__box">
            <h3 className="footer__link-title">Information</h3>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <p className="footer__menu-item">{delivers?.data?.openTime1}</p>
              </li>
              <li className="footer__menu-item">
                <p className="footer__menu-item">{delivers?.data?.openTime2}</p>
              </li>
              <li className="footer__menu-item">
                <p className="footer__menu-item">{delivers?.data?.openTime3}</p>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h3 className="footer__link-title">Social</h3>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <p className="footer__link">
                  {delivers?.data?.delivery1}
                </p>
              </li>
              <li className="footer__menu-item">
                <p className="footer__link">
                  {delivers?.data?.delivery2}
                </p>
              </li>
              <li className="footer__menu-item">
                <p className="footer__link">
                  {delivers?.data?.delivery3}
                </p>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__link">
                  {delivers?.data?.delivery4}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="light-soft">Copy Rights @<span className="highlight">Light Soft</span></p>
      </div>
    </footer>
  );
}

export default Footer