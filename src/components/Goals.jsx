import React from 'react'
import {gsap} from 'gsap'

const Goals = () => {
  return (
    <div className='bg-r text-center'>
        <h1 className='text-4xl font-bold py-[2rem]'>OUR SCHOOL GOALS</h1>
        <p className='pb-[2rem] text-2xl'>Your Career Path Begins Here</p>
        <div className="goals-sec flex flex-col md:flex-row justify-between gap-[1rem]">
            <div className="box">
                <p>Affordability</p>
            </div>
            <div className="box">
                <p>Accreditation</p>
            </div>
            <div className="box">
                <p>School progress</p>
            </div>
            <div className="box">
                <p>Track Record</p>
            </div>
        </div>
    </div>
  )
}
gsap.from('.box', {opacity: 0, duration: 2, delay: 2, x: 60})
gsap.from('.bg-r', {opacity: 0, duration: 2, delay: 2, y: 25})
export default Goals