import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import College_Journey_Logo from '../../assets/college_journey_logo.png';
import authService from '../appwrite/auth';
import {useSelector, useDispatch} from 'react-redux'
import { logoutReducer } from '../Store/Reducers/Reducer';
import toast from 'react-hot-toast';

function Navbar() {
    const userState = useSelector(state => state.userInfo.user)
    const [toggle, setToggle] = useState(true)
    const [user, setUser] = useState(userState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    authService.getCurrentUser().then((resp)=>
    {
        setUser(true)
    });

    const logout = ()=>
    {
        authService.logout().then((response)=>{
            toast.success("You have logged out successfully");
            dispatch(logoutReducer(false));
            dispatch(setAdmin(false));
            setUser(false);
            navigate('/login')
        }).catch((error)=>
        {
            toast.error("Sorry! something went wrong");
        });
    }
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
                {/* Navbar items which display when medium or from greater device width will occure */}
                <div className='hidden md:flex'>
                    <ul className='flex justify-center items-center gap-4 p-4 font-bold'>

                        <NavLink to='/' className={({isActive})=>
                        `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                        >Home</NavLink>


                        <NavLink to='/batches' className={({isActive})=>
                        `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                        >Batches</NavLink>

                        <NavLink to='/projects' className={({isActive})=>
                        `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                        >Projects</NavLink>

                        <NavLink to='/registration' className={({isActive})=>
                        `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                        >Registration</NavLink>
                        
                        {
                            user ?
                            <li className='hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md' onClick={()=>logout()}>Logout</li>
                             :
                             <NavLink to='/login' className={({isActive})=>
                            `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                            >Login</NavLink>
                        }
                        
                        {
                            user ?
                            <li className='hidden hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'><NavLink to = 'profile'>Profile</NavLink></li>
                            :
                            <NavLink to='/signup' className={({isActive})=>
                            `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                            >Signup</NavLink>
                        }  
                        <NavLink to='/admin_panel' className={({isActive})=>
                        `${isActive ? 'px-1 text-gray-800 cursor-pointer transition-all duration-200 shadow-md bg-[#8aaaee] shadow-gray-950 rounded-md' : 'hover:text-gray-800 cursor-pointer hover:transition-all duration-200 hover:shadow-md hover:bg-[#8aaaee] hover:shadow-gray-950 rounded-md'}`}
                        >Panel</NavLink>                
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