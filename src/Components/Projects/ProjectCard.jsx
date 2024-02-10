import React, { useState } from 'react'
import ProjectImage from '../../assets/back.png';
function ProjectCard() { 
  return (
    <>
        <div className='relative flex md:gap-4 backdrop-blur-sm'>
            <div className='relative md:w-[210px] w-[150px] flex flex-col justify-center items-center shadow-md shadow-gray-950 md:gap-5 gap-1 rounded-3xl'>
                {/* <div className={`absolute w-8 h-8 top-0 left-0 p-4 bg-[#ff0f5b] rounded-br-[100px]`}></div> */}
                <div className='flex flex-col justify-center items-center'>
                    <img className=' md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[150px] h-[150px] object-cover hover:cursor-pointer transition-all hover:border-2 border-white ease-in duration-200 shadow-md shadow-gray-950 rounded-t-3xl' src={ProjectImage} alt="" />
                </div>
                <div className='w-full flex flex-col justify-center items-center sm:gap-2 gap-1 mb-2'>
                    <p className='text-[#fff] mx-1 font-thin'>Project Name</p>
                    <hr className='bg-[#fff] border-1 border-[#fff] w-full' />
                    <button className='bg-transparent md:px-4 px-1 sm:text-lg hover:translate-y-0.5 duration-200 text-white font-thin'><a href="https://react-website-seven-lovat.vercel.app" target='_blank'>Read more</a></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard