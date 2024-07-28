import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  const uDetails = JSON.parse(localStorage.getItem('uDetails'));
  return (
    <div className='navbar'>
        <div>
        <span className="cine">Cine</span>
        <span className="curate">Curate</span>
        </div>
        <div>
        <NavLink to='/home'>Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/watchlist' >My Watchlist</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/'>Logout</NavLink>
        </div>
        <div className='welcome'>
          Welcome <span className='namee'>{uDetails.name}</span>
        </div>
    </div>
  )
}
