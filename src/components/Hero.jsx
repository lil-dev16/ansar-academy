import React, { useEffect } from 'react'
import {gsap} from 'gsap'

const Hero = () => {

  useEffect(()=> {
    gsap.from('.circ-con', {opacity:0, duration:2, delay: 2, y: 45, stagger: .2});
    gsap.from('.hero-header', {opacity:0, duration:2, delay: 1, y: 45 });
    gsap.from('.hero-text', {opacity:0, duration:2, delay: 2, y: 45 });
  }, [])
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 min-h-[50vh] '>
        <div className='bg-r grid pb-[2rem] '>

        <h1 className='text-3xl font-bold text-center py-[2rem] hero-header'>Empowering Student knowledge</h1>
        <p className='hero-text'>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Unde, eos! Vero, dolore
             quas. Nemo, sint perferendis deleniti labori
             osam impedit dolorum quae expedita quasi ea
              alias error dolor, natus, amet inventore. 
              Et exercitationem hic reprehenderit totam,
               error numquam iste aut tenetur perspiciatis
            eveniet harum fugiat voluptates sit suscipit amet dolor!</p>
            <button className='btn p-[.7rem] rounded-md my-[1rem] mr-[0]'>Learn More</button>
            <div className="wavy-sec flex flex-col md:flex-row justify-between mt-[2rem]">
              <div className="circ-con flex flex-col items-center gap-[20px]">
                <div className="circle w-[200px] h-[200px] rounded-full"></div>
                <p>Quality Education</p>
              </div>
              <div className="circ-con flex flex-col items-center gap-[20px] mt-[4rem]">
                <div className="circle w-[200px] h-[200px] rounded-full"></div>
                <p>Quality Education</p>
              </div>
              <div className="circ-con flex flex-col items-center gap-[20px] mt-[2.5rem]">
                <div className="circle w-[200px] h-[200px] rounded-full"></div>
                <p >Quality Education</p>
              </div>
            </div>
        </div>
    </div>
  )
}



export default Hero