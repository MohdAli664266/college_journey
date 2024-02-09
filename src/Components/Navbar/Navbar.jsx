import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [toggle, setToggle] = useState(true)
  return (
    <>
        <div className='w-full gap-4'>
            <div className='w-full px-4 flex justify-between shadow-md shadow-gray-900'>
            {/* image container */}
                <div className='p-2 flex justify-center items-center'>
                    <img className='object-cover h-10 w-10 cursor-pointer' src="data:image/png;base64,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" alt="" />
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
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#0f0] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to='/'>Home </NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#0f0] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to='batches'>Batches </NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#0f0] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'projects'>Projects</NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#0f0] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'login'>Login</NavLink></li>
                        <li className='hover:text-gray-800 cursor-pointer hover:text-lg hover:transition-all duration-200 hover:shadow-md hover:bg-[#0f0] hover:shadow-gray-950 hover:p-1 rounded-md'><NavLink to = 'signup'>Signup</NavLink></li>
                    </ul>
                </div>
            </div>
                
                {/* slider navbar for mobile */}
            <div className={`md:hidden absolute flex bg-slate-600 max-w-full h-auto ${toggle ? 'mx-[-100%]' : 'mx-[0%]' }  text-white mt-4 z-10`}>
                    <ul className='flex flex-col items-center gap-4 p-4 font-bold'>
                        <li className='hover:text-gray-800 hover:text-lg hover:transition-all duration-200 cursor-pointer'><NavLink to = '/'>Home</NavLink></li>
                        <li className='hover:text-gray-800 hover:text-lg hover:transition-all duration-200 cursor-pointer'><NavLink to = 'batches'>Batches</NavLink></li>
                        <li className='hover:text-gray-800 hover:text-lg hover:transition-all duration-200 cursor-pointer'><NavLink to = 'projects'>Projects</NavLink></li>
                        <li className='hover:text-gray-800 hover:text-lg hover:transition-all duration-200 cursor-pointer'><NavLink to = 'login'>Login</NavLink></li>
                        <li className='hover:text-gray-800 hover:text-lg hover:transition-all duration-200 cursor-pointer'><NavLink to = 'signup'>Signup</NavLink></li>
                    </ul>
                </div>
        </div>
    </>
  )
}

export default Navbar