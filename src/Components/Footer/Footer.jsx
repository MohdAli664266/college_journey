import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter  } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer class="bg-gray-500">
        <div class="w-full flex-col justify-center items-center">
            <div className='grid md:grid-cols-3 gap-5 p-10 mt-5'>
              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4'>
                <h1 className='text-3xl font-bold'>Stay Connect</h1>
                <div className='flex overflow-hidden mt-8 shadow-lg shadow-gray-950 rounded-lg'>
                <input className='w-full outline-none py-1 px-3 text-[#0f0]' type="text" name="name" id="name" placeholder='Enter your email' />
                <button className='bg-blue-700 shrink-0 px-2 font-bold hover:text-[#0f0]' onClick={()=>(alert)("Site is on production phase still")}>Submit</button>
                </div>
              </div>

              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4'>
                <h1 className='text-3xl font-bold'>Projects</h1>
                <ul className='px-4 text-purple-700 mt-2'>
                  <li className='cursor-pointer hover:text-[#0f0]'>
                    <Link to='passwordGenerator'>Password Generator</Link></li>
                  <li className='cursor-pointer hover:text-[#0f0]'>
                    <Link to='toDo'>
                      ToDo list
                    </Link>
                  </li>
                  <li className='cursor-pointer hover:text-[#0f0]'>Comming soon</li>
                  <li className='cursor-pointer hover:text-[#0f0]'>Comming soon</li>
                  
                </ul>
              </div>

              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4 flex flex-col gap-5 '>
                <h1 className='text-3xl font-bold'>Contact Us</h1>
                <p className='px-4 text-purple-700'>Just click on below given link and follow</p>
                <div className=' flex items-center justify-between p-4'>
                  <a href="https://www.instagram.com/mohd_ali_664266/?igsh=MXUwa202aG55YWw0ZQ%3D%3D" target='_blank'>
                  <FaInstagram className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
                  <a href="https://www.linkedin.com/in/mohd-ali-293a94250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                  <FaLinkedinIn className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>

                  <a href="https://github.com/MohdAli664266" target='_blank'>
                  <FaGithub className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
                  <a href="https://x.com/AnsariRoyalroy?t=aWIO7l_gZCHj1uTI_5hHaA&s=08 ">
                  <FaTwitter className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
                </div>
              </div>
            </div>
            <h1 className='text-center py-4'>All keywords are reserved. Copywrite&copy; </h1>
        </div>
    </footer>
    </>
  )
}

export default Footer