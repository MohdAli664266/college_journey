import React, { useState } from 'react'
import Ali from '../../assets/Mohd_Ali.jpeg';
import conf from '../../conf/conf';
function BatcheCards({batch}) { 
    const fileId = batch.imagePath;
    let imageUrl = "https://cloud.appwrite.io/v1/storage/buckets/"+conf.bucketId
    +"/files/"+fileId+"/view?project="+conf.projectId;
  return (
    <>
        <div className='relative flex md:gap-4 backdrop-blur-sm'>
            <div className='relative md:w-[210px] w-[150px] flex flex-col justify-center items-center shadow-md shadow-gray-950 md:gap-5 gap-1 rounded-3xl'>
               
                <div className='flex flex-col justify-center items-center'>
                    <img className=' md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[150px] h-[150px] object-cover hover:cursor-pointer transition-all hover:border-2 border-white ease-in duration-200 shadow-md shadow-gray-950 rounded-t-3xl' src={imageUrl} alt="" />
                </div>
                <div className='w-full flex flex-col justify-center items-center sm:gap-2 gap-1 mb-2'>
                    <p className='text-[#fff] mx-1 font-thin'>{batch.name}</p>
                    <hr className='bg-transparent border-1 border-[#fff] w-full' />
                    <button className='bg-transparent md:px-4 px-1 sm:text-lg hover:translate-y-0.5 duration-200 text-white font-thin'><a href="https://react-website-seven-lovat.vercel.app" target='_blank'>Read more</a></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default BatcheCards