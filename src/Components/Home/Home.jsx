import React from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HomeCards from './HomeCards';

function Home() {
    const colors = [{color:'#ff0f5b'}, {color:'#0f0'}, {color:'lime'}, {color:'#18fff3'}, {color:'#18fff3'}]
  return (
    <>
        <div className='flex justify-center items-center overflow-hidden'>
            <div className='mt-4 opacity-[0.6] w-full'>
                <img className='w-full object-cover' src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            
            <div className='w-full absolute p-4 font-extrabold flex flex-col justify-center items-center gap-5'>
                <div className='lg:text-6xl sm:text-4xl text-xl flex justify-center gap-4 items-center p-4 cursor-pointer'>
                    <p>Welcome to</p> 
                    <p className='text-[#fff200] bg-[#f08] px-4 pb-1 rounded-md'> College Journey</p>
                </div>

                <div className='w-full sm:flex hidden lg:justify-center items-center p-3 gap-5 overflow-x-auto'>
                    {
                        colors.map(({color})=>

                            <HomeCards color={color}/>
                        )
                    }
                </div>
            </div>
        </div>

        <div className='w-full font-extrabold flex flex-col sm:hidden p-4 bg-gray-600 justify-center gap-4'>
            <div className='text-2xl text-[lime] font-bold py-2'><h1>Developers</h1></div>
            <div className='gap-4 flex md:justify-center md:items-center justify-start overflow-x-auto'>
                        {
                            colors.map(()=>

                                <HomeCards />
                            )
                        }
            </div>
        </div>
        
    </>
  )
}

export default Home