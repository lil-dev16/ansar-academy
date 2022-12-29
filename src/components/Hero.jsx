import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 min-h-[50vh] '>
        <div className='bg-r grid pb-[2rem] '>

        <h1 className='text-3xl font-bold text-center py-[2rem]'>Empowering Student knowledge</h1>
        <p>Lorem, ipsum dolor sit amet consectetur 
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