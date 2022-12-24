import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', checkResize)
    console.log(width);
    return () => {
      window.removeEventListener('resize', checkResize);
    }
      
  })
  return (
    <div className='nav__container'>
        <div className="block-header ">
          <div className='bg-r head'>
            <img src="logo" alt="" />
            <h1>ANSAR-UD-DEEN ACADEMY</h1>
          </div>
          {width < 760 && <div className="hamburger"></div>}
        </div>
        <div className="nav bg-r">
            <ul className='nav__content'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to = "/admission">Amission</NavLink>
                <NavLink to = "/about_us">About us</NavLink>
                <NavLink to = "/gallery">Gallery</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
                <NavLink to = "/login">Login Dashboard</NavLink>
                <img src="" alt="search" />
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar