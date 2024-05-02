import React from 'react'
import { Link } from 'react-router-dom'

const CoursesDetailed = () => {
  return (
    <div className=' min-h-screen'> 
    <div className=' '>
<h1 className=' text-center text-4xl text-blue-800 mt-5'>Our Best Courses for Good Learning</h1>

<div className=' flex justify-center items-center mt-5'>
<div className=' w-80 h-96 shadow-lg '>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCK14I6Rx-YKGY3m2K1tc2sEcBA8l-mmMQFeuN-81zA&s" className=' w-full' alt="" />
     <div className=' flex justify-center flex-col'>
     <p className=' text-2xl mt-2 text-black text-center'>Dout Clearing Programm For Data Science Course </p>
     <Link to={'/douted'} className=' text-2xl mt-8 text-center'><span className='bg-blue-700 px-2 rounded-sm hover:bg-blue-900'>View More Details</span></Link>

     </div>
</div>


</div>



    </div>




    </div>
  )
}

export default CoursesDetailed