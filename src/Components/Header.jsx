import React, { useState } from 'react'
import { Link, Outlet, useActionData } from 'react-router-dom'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { signInsuccess } from '../redux/user/userSlice';
// import Cookie from 'react-cookie'
import Iconh from '../Asset/picture.jpeg'


const Header = () => {
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const [menuDisplay,setMenuDisplay] = useState(false)
    // console.log(user.currentUser.profilePic)
    
        const handlelogout = async(e) => {
            
            try{
                localStorage.clear()
                //  Cookie.remove(token)
               const res= await axios.get(`${import.meta.env.VITE_URL}/api/v1/auth/logout`)

               if(res?.data?.success){
                   console.log(res)
                   dispatch(signInsuccess(null))
                   toast.success(res?.data?.message)

               }
               
              }
          catch(e){
            console.log(e)
            // toast.error(e.response.data.message)
            }
          };
    
  return (
    <>
    {/* <Outlet/> */}
    <header className='h-16 shadow-md bg-white sticky w-full z-40 top-0'>
    <div className=' h-full container mx-auto flex items-center px-10 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    {/* <Logo w={90} h={50}/> */}
                    <img src={Iconh} alt="" className=' w-12 h-12 rounded-full' />
                </Link>
            </div>
 
            {/* <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none' />
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <GrSearch />
                </div>
            </div> */}
            <div className='flex items-center gap-7'>
{/*              
            <div className='relative flex justify-center'>

                  {
                    user?.currentUser?._id && (
                      <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
                        {
                          user?.currentUser?.profilePic ? (
                            <img src={user?.currentUser?.profilePic} className='w-10 h-10 rounded-full' alt={user?.currentUser?.name} />
                          ) : (
                            <FaRegCircleUser/>
                          )
                        }
                      </div>
                    )
                  }
                  
                  
                  {
                    menuDisplay && (
                      <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                        <nav>
                          {
                            user?.currentUser?.Role === 1 && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                          }
                         
                        </nav>
                      </div>
                    )
                  }
                 
                </div> */}

                <div className=' text-xl relative '>
                <Link to={"/courserd"} className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-900'>courses</Link>
                   {/* <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className=' text-xs'>0</p>
                   </div> */}
                </div>

                <div>
                {/* {
                    user?.currentUser? (
                      <button onClick={handlelogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
                    )
                    : ( */}
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
                    {/* ) */}
                  {/* } */}
                    
                </div>
                
            </div>
            </div>
     
     
    </header>
     
    </>
  )
}

export default Header