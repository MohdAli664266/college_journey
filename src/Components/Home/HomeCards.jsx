import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeCards({detail}) { 
  return (
    <>
        <div className='relative grid grid-rows-1 md:gap-4 backdrop-blur-sm sm:bg-transparent'>
            <div className='relative md:w-[220px] w-[150px] p-4 flex flex-col justify-center items-center shadow-md shadow-gray-950 md:gap-5 gap-1'>
                <div className={`absolute w-8 h-8 top-0 left-0 p-4 bg-[#6483ad] rounded-br-[100px]`}></div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='rounded-full md:w-[170px] md:h-[170px] sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] object-left-top object-cover hover:cursor-pointer shadow-md shadow-gray-950' src={detail.img} alt="" />
                    <h1 className={`sm:text-2xl text-lg text-white font-extrabold cursor-pointer font-serif`}>{detail.name}</h1>
                </div>
                <hr className={`bg-white border-1 border-[#fff] w-full`} />
                <div className='w-full flex flex-col justify-center items-center gap-5'>
                    <p className={`text-white mx-1 font-thin`}>{detail.profession}</p>
                    <button className={`bg-white md:px-4 px-1 sm:text-lg hover:translate-y-0.5 duration-200`}>
                        <NavLink to = 'developer'>Read more</NavLink>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCards