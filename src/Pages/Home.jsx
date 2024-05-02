import React from 'react'
import { Link } from 'react-router-dom'
import gthome from '../Asset/hone.jpg'

const Home = () => {
  return (
    <div className=' text-black min-h-screen h-full'> 
    
    <div className=' flex justify-center relative text-center '>
    <img src={gthome} className=' bg-cover h-full opacity-50 md:h-full' alt="" />
    <div className='absolute flex justify-center items-center flex-col mt-48'>
    <h1 className=' text-5xl'><span className=' text-black'> Good Education Is Our Top Priority</span></h1>
<div className=' mt-28 space-x-20'>
  
  <Link className=' bg-red-600 p-5 hover:bg-red-800 rounded-sm'>Most Pupular Courses</Link>
    <Link to={'/courserd'} className='bg-red-600 p-5 hover:bg-red-800 rounded-sm'>Explore Courses</Link>

   
</div>

    </div>
  

    </div>
    </div>
  )
}

export default Home