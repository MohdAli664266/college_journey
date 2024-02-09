import React, { useState } from 'react'
import Ali from '../../assets/ali.jpg';
function HomeCards() { 
    let c = '#0f0';   
  return (
    <>
        <div className='relative flex md:gap-4 backdrop-blur-sm bg-white sm:bg-transparent'>
            <div className='relative md:w-[210px] w-[150px] p-4 flex flex-col justify-center items-center shadow-md shadow-gray-950 md:gap-5 gap-1'>
                <div className={`absolute w-8 h-8 top-0 left-0 p-4 bg-[#ff0f5b] rounded-br-[100px]`}></div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='rounded-full md:w-[170px] md:h-[170px] sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] object-cover hover:cursor-pointer transition-all hover:border-2 border-white ease-in duration-200 shadow-md shadow-gray-950' src={Ali} alt="" />
                    <h1 className={`sm:text-2xl text-lg text-[#ff0f5b] font-extrabold cursor-pointer font-serif`}>Mohd Ali</h1>
                </div>
                <hr className='bg-[#ff0f5b] border-2 border-[#ff0f5b] w-full' />
                <div className='w-full flex flex-col justify-center items-center gap-5'>
                    <p className='text-[#ff0f5b] mx-1'>Web Developer</p>
                    <button className='bg-[#ff0f5b] md:px-4 px-1 sm:text-lg hover:translate-y-0.5 duration-200'>Read more</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCards