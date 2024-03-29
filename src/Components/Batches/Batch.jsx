import React, { useEffect, useState } from 'react'
import database from '../appwrite/database'
import BatcheCards from './BatcheCards'

function Batch() {
    const [batchs, setBatch] = useState([])
    const batch = async ()=>
    {
        await database.getAllBatches()
        .then((res)=>
        {
            setBatch(res?.documents)
            console.log("batch response is written below");
            console.log(res)
        })
        .catch((error)=>alert(error))
    }
    useEffect(()=>{
        batch();
    }, []);
    
  return (
    <div>
        <div className='flex justify-center items-center p-4 flex-col gap-2'>
            <div className='relative w-full font-extrabold flex flex-col p-4 bg-[#94b6ff] justify-center gap-4'>
            <div className='text-2xl text-white font-bold px-4 py-2'><h1>Batches</h1></div>
            <div className='gap-4 p-4 flex lg:justify-center md:items-center justify-start overflow-x-auto'>
                        {
                            batchs && batchs.map((batch)=>
                            <BatcheCards batch={batch}/>
                            )
                        }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Batch