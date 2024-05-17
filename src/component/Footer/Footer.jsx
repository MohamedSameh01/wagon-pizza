/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import "./Footer.css";
import Instgram from "../../assets/images/instgram.jpg"
import Twitter from "../../assets/images/Twitter.jpg"
import Facebook from "../../assets/images/Facebook.jpg"
import { Link } from "react-router-dom";

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
            <h3 className="footer__link-title">Times</h3>
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
            <h3 className="footer__link-title">Times</h3>
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
        <div className="info-company">
          <div className="part1">
            <span className="highlight">part1</span>
            <p>
              {" "}
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className="part2">
            <span className="highlight">part2</span>
            <p>
              {" "}
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <hr />
        <p className="light-soft">
          Copy Rights @<span className="highlight">Light Soft</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
