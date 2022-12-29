import React from 'react'

const About = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between bg-r py-[3rem] gap-[1rem]'>
        <div className='w-[31rem]'>
            <h1 className='text-4xl font-bold'>Care About Us</h1>
            <p className='text-3xl py-[2rem]'>Where Learning Begins</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique asperiores reprehenderit ipsum earum reiciendis. Consequatur at perspiciatis explicabo. Aspernatur eos a hic dolorem cupiditate odio facere consequatur! Adipisci praesentium in totam culpa, possimus quae deleniti ea facilis neque qui tempora minima quos corporis numquam architecto quod. Repellat adipisci accusantium nisi!</p>
            <button className='btn p-[1rem] rounded-md mt-[1rem]'>Learn More</button>
        </div>
        <div>
            <div className='w-[300px] h-[300px] bg-black'></div>
        </div>
    </div>
  )
}

export default About