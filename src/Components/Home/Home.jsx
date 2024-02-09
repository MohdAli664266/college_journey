import React from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HomeCards from './HomeCards';
import BatcheCards from '../Batches/BatcheCards';
import ProjectCard from '../Projects/ProjectCard';
import Ali from '../../assets/Mohd_Ali.jpeg';
import Anil from '../../assets/anil.jpg';
import Abbas from '../../assets/abbas.jpg';
import Yashika from '../../assets/yashika.jpeg';

function Home() {
    const colors = [{color:'#ff0f5b'}, {color:'#0f0'}, {color:'lime'}, {color:'#18fff3'}, {color:'#18fff3'}]

    const details = [
        {
            img:Ali,
            name: 'Mohd Ali',
            profession: 'Web Developer',
            color: 'lime'
        },
        {
            img:Anil,
            name: 'Anil Kumar',
            profession: 'Chutiya',
            color: '#ff0',
        },
        {   img:Abbas,
            name: 'Mohd Abbas',
            profession: 'Full Stack Developer',
            color: '#ff0f5b',
        },
        {   img:Yashika,
            name: 'Yashika Gupta',
            profession: 'Backend Developer',
            color: 'lime',
        }
    ]
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
                {/* developer cards for tablet and greater than tables */}
                <div className='sm:flex hidden lg:justify-center items-center p-3 gap-5 overflow-x-auto'>
                    {
                        details.map((detail)=>

                            <HomeCards detail={detail}/>
                        )
                    }
                </div>
            </div>
        </div>
        {/* developer cards for mobile */}
        <div className='w-full font-extrabold flex flex-col sm:hidden p-4 bg-gray-600 justify-center gap-4'>
            <div className='text-2xl text-[lime] font-bold px-4 py-2'><h1>Developers</h1></div>
            <div className='gap-4 p-4 flex md:justify-center md:items-center justify-start overflow-x-auto'>
                        {
                            details.map((detail)=>

                            <HomeCards detail={detail}/>
                            )
                        }
            </div>
        </div>


        {/* batches */}
        <div className='relative w-full font-extrabold flex flex-col p-4 bg-gray-600 justify-center gap-4'>
            <div className={`absolute lg:w-[180px] lg:h-[180px] w-[100px] h-[100px]  bottom-0 left-0 bg-[#ff0] rounded-tr-[100%]`}></div>
            <div className='text-2xl text-[lime] font-bold px-4 py-2'><h1>Batches</h1></div>
            <div className='gap-4 p-4 flex lg:justify-center md:items-center justify-start overflow-x-auto'>
                        {
                            colors.map(()=>

                                <BatcheCards />
                            )
                        }
            </div>
        </div>

        {/* Projects */}
        <div className='relative w-full font-extrabold flex flex-col p-4 justify-center gap-4 bg-gray-600'>
            <div className={`absolute lg:w-[180px] lg:h-[180px] w-[100px] h-[100px]  bottom-0 right-0 bg-[lime] rounded-tl-[100%]`}></div>

            <div className='text-2xl text-[lime] font-bold px-4 py-2'><h1>Projects</h1></div>
            <div className='gap-4 p-4 flex lg:justify-center md:items-center justify-start overflow-x-auto'>
                        {
                            colors.map(()=>

                                <ProjectCard />
                            )
                        }
            </div>
        </div>
    </>
  )
}

export default Home