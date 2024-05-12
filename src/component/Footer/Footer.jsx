// import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
      <footer className="section footer">
          <div className="container">
              <div className="footer__wrapper">
                  <div className="footer__logo">
                      <div className="logo">
                          <h1><span className="highlight">wagon</span> pizza</h1>
                      </div>
                      <p>Subscribe to our newsletter</p>
                      <div className="subscribe__box">
                          <input type="email" placeholder="Your email" />
                          <button className="subscribe__btn">Subscribe</button>
                      </div>
                  </div>

                  <div className="footer__box">
                      <h3 className="footer__link-title">Information</h3>
                      <ul className="footer__menu">
                          <li className="footer__menu-item">
                              <a href="#about" className="footer__link">About Us</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Events</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Career</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Our Chefs</a>
                          </li>
                      </ul>
                  </div>

                  <div className="footer__box">
                      <h3 className="footer__link-title">Services</h3>
                      <ul className="footer__menu">
                          <li className="footer__menu-item">
                              <a href="#about" className="footer__link">Online Order</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">24/7 Support</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Pre-Reservation</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Foodie Place</a>
                          </li>
                      </ul>
                  </div>

                  <div className="footer__box">
                      <h3 className="footer__link-title">Quick Links</h3>
                      <ul className="footer__menu">
                          <li className="footer__menu-item">
                              <a href="#menu" className="footer__link">Menu</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#blog" className="footer__link">Blog</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#about" className="footer__link">About Us</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Offer</a>
                          </li>
                      </ul>
                  </div>

                  <div className="footer__box">
                      <h3 className="footer__link-title">Social</h3>
                      <ul className="footer__menu">
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Facebook</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Instagram</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Linkedin</a>
                          </li>
                          <li className="footer__menu-item">
                              <a href="#" className="footer__link">Twitter</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer