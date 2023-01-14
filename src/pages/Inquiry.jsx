import React from 'react'

const Inquiry = () => {
  return (
    <div className='bg-r pt-[3rem] grid gap-[1rem]'>
         <h1 className='text-3xl font-bold'>Inquiry</h1>
         <div className='flex items-end justify-between w-[16rem]'><p className='text-[blue] text-xl font-bold'>School: </p> <span className='text-black'>Ansar-ud-deen Academy</span> </div>
         <p className='text-[blue] text-xl font-bold'>Class:</p>
              <select name="class" id="" className='border w-[6rem]'>
                  <option value="jss1">jss1</option>
                  <option value="jss2" >jss2</option>
                  <option value="jss3">jss3</option>
                  <option value="sss1">sss1</option>
                  <option value="sss2">sss2</option>
                  <option value="sss3">sss3</option>
  
              </select>
              <p className='text-[blue] text-xl font-bold'>Name:</p>
              <input type="text" className='p-[1rem] w-[300px] border'/>
              <p className='text-[blue] text-xl font-bold'>Phone:</p>
              <input type="text" className='p-[1rem] w-[300px] border'/>
              <p className='text-[blue] text-xl font-bold'>Email:</p>
              <input type="text" className='p-[1rem] w-[300px] border'/>
              <p className='text-[blue] text-xl font-bold'>Reference:</p>
              <input type="text" className='p-[1rem] w-[300px] border'/>
              <p className='text-[blue] text-xl font-bold'>Message:</p>
              <textarea name="message" id="" cols="60" rows="10" className='border w-fit'></textarea>
    </div>
  )
}

export default Inquiry