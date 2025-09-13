import React from 'react'
import Logo from "../assets/react.svg";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex space-x-8 items-center pl-3 py-4'>
        <li>
          <NavLink to="/home">
            <img className="w-[50px]" src={Logo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none"
            }
          }}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist" style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none"
            }
          }}>WatchList</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
