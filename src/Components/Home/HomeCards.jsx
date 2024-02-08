import React from 'react'
import Ali from '../../assets/ali.jpg';
function HomeCards() {
  return (
    <>
        <div className='p-4 flex gap-4'>
            <div className='absolute w-8 h-8 bg-[#ff0f5b]'></div>
            <div className='w-[230px] p-4 flex flex-col justify-center items-center shadow-md shadow-gray-950 gap-5'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='rounded-full w-[170px] h-[170px] object-cover hover:cursor-pointer transition-all hover:border-2 border-white ease-in duration-200 shadow-md shadow-gray-950' src={Ali} alt="" />
                    <h1 className='text-2xl text-[#ff0f5b] font-extrabold cursor-pointer font-serif'>Mohd Ali</h1>
                </div>
                <hr className='bg-[#ff0f5b] border-2 border-[#ff0f5b] w-full' />
                <div className='flex flex-col justify-center items-center gap-5'>
                    <p className='text-[#ff0f5b]'>Web Developer/Backend Developer</p>
                    <button className='bg-[#ff0f5b] px-4 text-lg hover:translate-y-0.5 duration-200'>Read more</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCards