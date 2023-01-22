import React from 'react';
import "./Navbar.css";

function getNavMenu() {
  return document.getElementById('nav-menu');
}

function showMenu() {
  const navMenu = getNavMenu();
  navMenu.classList.toggle('show');
}

function hideMenu() {
  const navMenu = getNavMenu();
  navMenu.classList.remove('show');
}

function Navigation() {

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="/" className="nav__logo">SipWise</a>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>

        <div className="nav__menu" id="nav-menu" onClick={hideMenu}>
          <div className="nav__close" id="nav-close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>

          <ul className="nav__list auth ">
            <li className="nav__item"><a href="/" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href='/about' className="nav__link">Our Team</a></li>
            <li className="nav__item"><a href='/error' className="nav__link">Error</a></li>
            <li className="nav__item vertical-line"></li>
            <li className="nav__item auth">
              <a href="/login" className="nav__link">Login</a>
              <a href="/register" className="navigation__login_button">Start free</a>
            </li>
          </ul>
        </div>
      </nav>

    </header >

  );


}

export default Navigation;