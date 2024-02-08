import React from 'react'
import Ali from '../../assets/ali.jpg';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Home() {
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='mt-4 opacity-[0.6] w-full'>
                <img className='w-full object-cover' src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            
            <div className='w-full bg-yellow-300 absolute p-4 font-extrabold'>
                <div className='text-6xl flex justify-center items-center bg-green-900 p-4'>
                    <p>Welcome to</p> 
                    <p className='text-[#fff200] bg-[#f08]'> College Journey</p>
                </div>
                <div className='grid grid-cols-8'>
                    <div className=''>
                        <img className='w-[200px] object-cover' src={Ali} alt="" srcset="" />
                        <h6>Mohd Ali</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis aliquam magnam</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home