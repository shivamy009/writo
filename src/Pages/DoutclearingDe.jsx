import React from 'react'

const DoutclearingDe = () => {
  return (
    <div className=' min-h-screen'> 
     <div className=' flex justify-center mt-5'>
        <div className=' flex justify-center flex-col bg-blue-400 p-5 w-96'>
            <h1 className=' mt-5 text-black text-3xl'>Here is Detailed about Your Educator</h1>

            <ul className=' flex justify-start flex-col'>
                <li className=' text-2xl mt-4'>Educator Name:<span className=' text-black font-bold'>Xyzabc</span></li>
                {/* <li className=' text-2xl'>Virat Kohli</li> */}
                <li className=' text-2xl'>About Educator-<span>Expert in Data Science Technology</span></li>
                {/* <li className=' text-2xl'>Expert in Data Science Technology</li> */}
            </ul>

            <h1 className=' mt-3 text-3xl'>Time and date:</h1>
            <p className=' mt-2'>Time:  <span>08:00 PM</span></p>
            <p className=' mt-2'>Date:  <span>03/05/2024</span></p>
        </div>
     </div>
    </div>
  )
}

export default DoutclearingDe