import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const uDetails = JSON.parse(localStorage.getItem('uDetails'));

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`navbar ${menuActive ? 'menu-active' : ''}`}>
      <div>
        <span className="cine">Cine</span>
        <span className="curate">Curate</span>
      </div>
      <div>
        <NavLink to='/home'>Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/watchlist'>My Watchlist</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/'>Logout</NavLink>
      </div>
      <div className='welcome'>
        Welcome <span className='namee'>{uDetails.name}</span>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
