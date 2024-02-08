import React from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HomeCards from './HomeCards';

function Home() {
    let arr = [1, 2, 4, 5]
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='mt-4 opacity-[0.6] w-full'>
                <img className='w-full object-cover' src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            
            <div className='w-full absolute p-4 font-extrabold flex flex-col justify-center items-center gap-5'>
                <div className='text-6xl flex justify-center gap-4 items-center p-4'>
                    <p>Welcome to</p> 
                    <p className='text-[#fff200] bg-[#f08] px-4 pb-1 rounded-md'> College Journey</p>
                </div>

                <div className='w-full flex justify-center items-center overflow-x-auto'>
                    {
                        arr.map(()=>

                            <HomeCards/>
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Home