// import React from 'react'
import "./Nav.css"
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg"
const Nav = () => {
  return (
      <header className="header">
          <nav className="nav">
                  <div className="nav__wrapper">
                      <div className="logo">
                            <img src={Logo} alt="logo"/>
                          <h1>Pizza<span className="highlight">Day</span></h1>
                      </div>

                      <div className="navigation">
                          <ul className="nav__menu">
                              <li className="nav__item">
                                  <a href="#home" className="nav__link">Home</a>
                              </li>
                              <li className="nav__item">
                                  <a href="#menu" className="nav__link">Menü</a>
                              </li>
                              <li className="nav__item">
                                  <a href="#about" className="nav__link">Reservation</a>
                              </li>
                              <li className="nav__item">
                                  <a href="#blog" className="nav__link">Angebote & Gustscheine </a>
                              </li>
                              <li className="nav__item">
                                  <a href="#blog" className="nav__link">Kontakt</a>
                              </li>
                          </ul>
                      </div>
                      <div className="nav-buttons"> 
                        <button>Login</button>
                        
                      </div>
                
                      <span className="mobile__menu"><i className="ri-menu-line"></i></span>
                  </div>
          </nav>
      </header>
  )
}

export default Nav