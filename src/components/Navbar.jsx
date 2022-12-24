import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  const checkResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', checkResize)
    console.log(width);
    return () => {
      window.removeEventListener('resize', checkResize);
    }
      
  });

  const handleClick = () => {
    setShowSidebar(prev => !prev)
    console.log(showSidebar);
  }
  return (
    <div className='nav__container'>
        <div className="block-header ">
          <div className='bg-r head'>
            {/* <img src="logo" alt="" /> */}
            <h1>ANSAR-UD-DEEN ACADEMY</h1>
          {width < 760 && <div className="hamburger" onClick={handleClick}></div>}
          </div>
        </div>
        <div className={`${showSidebar ? 'shw' : 'noshw'} nav bg-r`}>
            <ul className= ' nav__content'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to = "/admission">Admission</NavLink>
                <NavLink to = "/about_us">About us</NavLink>
                <NavLink to = "/gallery">Gallery</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
                <NavLink to = "/login">Login Dashboard</NavLink>
                <BsSearch />
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar