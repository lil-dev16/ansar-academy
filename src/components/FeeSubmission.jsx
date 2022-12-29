import React from 'react'

const FeeSubmission = () => {
  return (
    <div className='bg-r'>
        <h1>Fee Submission</h1>
        <p>Online Fee Submission</p>
        <p>School: <br/> Ansar-ud-deen Academy</p>
        <div>
            <select name="class" id="">
                <option value="jss1">jss1</option>
                <option value="jss2" >jss2</option>
                <option value="jss3">jss3</option>
                <option value="sss1">sss1</option>
                <option value="sss2">sss2</option>
                <option value="sss3">sss3</option>

            </select>
        </div>
    </div>
  )
}

export default FeeSubmission