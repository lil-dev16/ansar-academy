import React from 'react'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Goals />
    </div>
  )
}

export default Home