import React from 'react'

const FeeSubmission = () => {
    return (
      <div className='bg-r pt-[3rem] grid gap-[1rem]'>
          <h1 className='text-3xl font-bold'>Fee Submission</h1>
          <p>Online Fee Submission</p>
          <div className='flex items-end justify-between w-[16rem]'><p className='text-[blue] text-xl font-bold'>School: </p> <span className='text-black'>Ansar-ud-deen Academy</span> </div>
          <div className='grid gap-[1rem]'>
            <p className='text-[blue] text-xl font-bold'>Session:</p>
            <select name="session" id="" className='w-fit'>
              <option value="1st">1st Term</option>
              <option value="2nd">2nd Term</option>
              <option value="3rd">3rd Term</option>
            </select>
            <p className='text-[blue] text-xl font-bold'>Class:</p>
              <select name="class" id="" className='border w-fit'>
                  <option value="jss1">jss1</option>
                  <option value="jss2" >jss2</option>
                  <option value="jss3">jss3</option>
                  <option value="sss1">sss1</option>
                  <option value="sss2">sss2</option>
                  <option value="sss3">sss3</option>
  
              </select>
              <p className='text-[blue] text-xl font-bold'>Name: </p>
              <select name="name" id="" className='w-fit'>
                <option value="Michael">Michael</option>
                <option value="Joshua">Joshua</option>
                <option value="John">John</option>
              </select>
          </div>
          <div>
            <button className='p-[.7rem] w-[6rem] bg-[blue] rounded-xl text-white'>SEARCH</button>
            <p>1 student found </p>
          </div>
      </div>
    )
  }

export default FeeSubmission