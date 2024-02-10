import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import College_Journey_Logo from '../../assets/college_journey_logo.png';

function Navbar() {
    const [toggle, setToggle] = useState(true)
  return (
    <>
        <div className='w-full gap-4 bg-[#8aaaee] text-white'>
            <div className='w-full px-4 flex justify-between shadow-md shadow-gray-900'>
            {/* image container */}
                <div className='p-2 flex justify-center items-center'>
                    <img className='object-cover h-10 w-10 cursor-pointer' src={College_Journey_Logo} alt="" />
                </div>

                {
                    toggle ?
                    <div className='md:hidden flex justify-center items-center text-2xl'>
                        <HiMenu onClick={()=>setToggle(!toggle)}/>
                    </div>
                    :
                    <div className='md:hidden flex justify-center items-center text-2xl'>
                        <IoClose onClick={()=>setToggle(!toggle)}/>
                    </div>
                }
                {/* Navbar items which display when medium device width will occure */}
                <div className='hidden md:flex'>
                    <ul className='flex justify-center items-center gap-4 p-4 font-bold'>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to='/'>Home </NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to='batches'>Batches </NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'projects'>Projects</NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'registration'>Registration</NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'login'>Login</NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'signup'>Signup</NavLink></li>
                    </ul>
                </div>
            </div>
                
                {/* slider navbar for mobile */}
            <div className={`md:hidden absolute flex bg-[#8aaaee] max-w-full h-auto ${toggle ? 'mx-[-100%]' : 'mx-[0%]' }  text-white mt-4 z-10`}>
                    <ul className='flex flex-col items-center gap-4 p-4 font-bold'>
                        <li className={`hover:text-[#88ccee] hover:text-lg hover:transition-all duration-200 cursor-pointer`} onClick={()=>setToggle(!toggle)}><NavLink to = '/'>Home</NavLink></li>
                        <li className='hover:text-[#88ccee] hover:text-lg hover:transition-all duration-200 cursor-pointer' onClick={()=>setToggle(!toggle)}><NavLink to = 'batches'>Batches</NavLink></li>
                        <li className='hover:text-[#88ccee] hover:text-lg hover:transition-all duration-200 cursor-pointer' onClick={()=>setToggle(!toggle)}><NavLink to = 'projects'>Projects</NavLink></li>
                        <li className='hover:text-[#88ccee] hover:text-lg hover:transition-all duration-200 cursor-pointer' onClick={()=>setToggle(!toggle)}><NavLink to = 'login'>Login</NavLink></li>
                        <li className='hover:text-[#88ccee] hover:text-lg hover:transition-all duration-200 cursor-pointer' onClick={()=>setToggle(!toggle)}><NavLink to = 'signup'>Signup</NavLink></li>
                    </ul>
                </div>
        </div>
    </>
  )
}

export default Navbar