import React from 'react'
import About from '../components/About'
import FeeSubmission from '../components/FeeSubmission'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Goals />
        <About />
        <FeeSubmission />
    </div>
  )
}

export default Home