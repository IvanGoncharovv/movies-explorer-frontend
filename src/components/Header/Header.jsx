import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import headerLogo from '../../images/header__logo.svg'

function Header({loggedIn, color}) {
  return(
    <header className={`header ${color}`} >
      <div className="header__nav">
        <Link to="/" className="header__logo">    
          <img className="header__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}

export default Header;