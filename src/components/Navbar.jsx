import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav__container'>
        <div className="block-header">
            <img src="logo" alt="" />
            <h1>ANSAR-UD-DEEN ACADEMY</h1>
        </div>
        <div className="nav">
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="history">History</NavLink>
                <NavLink to = "admission">Amission</NavLink>
                <NavLink to = "about_us">About us</NavLink>
                <NavLink to = "gallery">Gallery</NavLink>
                <NavLink to = "contact">Contact</NavLink>
                <NavLink to = "login">Login Dashboard</NavLink>
                <img src="" alt="search" />
            </ul>
        </div>
    </div>
  )
}

export default Navbar