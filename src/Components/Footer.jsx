import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
       <p className='text-center font-bold' title="Youtube Channel">© 2024 My Awesome Website. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer