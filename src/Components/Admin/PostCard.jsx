import React from 'react'
import conf from '../../conf/conf';
function PostCard({batch}) 
{
    const fileId = batch.imagePath;
    let imageUrl = "https://cloud.appwrite.io/v1/storage/buckets/"+conf.bucketId
    +"/files/"+fileId+"/view?project="+conf.projectId;
  return (
    <div className='grid grid-cols-5 items-center p-2 text-white bg-[#84a4e4] gap-2'>
        <div>
            <img className='object-cover' src={imageUrl} alt="Image Error" />
        </div>
        <div className=''>{batch.name}</div>
        <div className=''>{batch.batchId}</div>
        <div className=''>{batch.heading}</div>
        <div className='flex gap-2 justify-center items-center'>
            <button className='hover:bg-transparent hover:text-black hover:shadow-md hover:shadow-gray-950 px-2 font-serif'>Edit</button>
            <button className='hover:bg-transparent hover:text-black hover:shadow-md hover:shadow-gray-950 px-2 font-serif'>Delete</button>
        </div>
    </div>
  )
}

export default PostCard