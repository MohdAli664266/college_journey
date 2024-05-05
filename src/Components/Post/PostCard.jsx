import React, { useState } from "react";
import conf from "../../conf/conf";
function PostCard({post}) {

    let imageUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/" +
    conf.bucketId +
    "/files/" +
    post.imagePath +
    "/view?project=" +
    conf.projectId;

  return (
    <div className="w-full grid grid-cols-4">
      <div className="col-span-2 pt-4 overflow-hidden text-center flex justify-center items-center">
        <img className="object-cover object-cover h-72 w-[100%] rounded-md" src={imageUrl} alt="" srcset="" />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <h1 className="w-full text-6xl py-4 text-center text-[blue] font-bold">
            {post.heading} 
          </h1>
          <p className="text-start pl-4 text-2xl font-thin">
            {post.description}
          </p>
        </div>
        <div className="pl-4">
          <h1 className="relative bottom-0">
            Shared by: <span>{post.name}</span>
          </h1>
          <p>
            Date: <span>{post.$createdAt}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
