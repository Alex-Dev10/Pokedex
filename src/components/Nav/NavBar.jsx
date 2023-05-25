import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

import Logo from './Recursos/Logo.png'
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    <Link to='/'>
      <img className="navbar-brand" src={Logo} alt="Logo" />
    </Link>
    <button className="navbar-toggler" type="button" onClick={handleToggle}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Home" className="nav-link" activeClassName="selected">
            Pokemones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Search" className="nav-link" activeClassName="selected">
            Search
            </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
};
