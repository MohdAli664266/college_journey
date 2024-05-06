import React, { useState } from "react";
import conf from "../../conf/conf";
function PostCard({ post, index }) {
  let imageUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/" +
    conf.bucketId +
    "/files/" +
    post.imagePath +
    "/view?project=" +
    conf.projectId;

  return (
    <>
      {index % 2 == 0 && (
        <div className="w-full grid grid-cols-4 gap-2 border-b-2 border-white">
          <div className="col-span-2 flex flex-col justify-around gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="w-full md:text-5xl text-3xl pl-4 pb-2 text-[#6388a8] font-bold">
                {post.heading}
              </h1>
              <p className="text-start pl-4 text-xl text-white font-thin">
                {post.description}
              </p>
            </div>
            <div className="pl-4 text-[#4a657c]">
              <h1 className="relative bottom-0">
                Shared by: <span>{post.name}</span>
              </h1>
              <p>
                Date: <span>{post.$createdAt}</span>{" "}
              </p>
            </div>
          </div>
          <div className="col-span-2 py-4 overflow-hidden text-center flex justify-center items-center">
            <img
              className="object-cover h-72 w-[100%] rounded-md"
              src={imageUrl}
              alt=""
              srcset=""
            />
          </div>
        </div>
      )}

      {index % 2 !== 0 && (
        <div className="w-full grid grid-cols-4 gap-2 border-b-2 border-white">
          <div className="col-span-2 py-4 overflow-hidden text-center flex justify-center items-center">
            <img
              className="object-cover h-72 w-[100%] rounded-md"
              src={imageUrl}
              alt=""
              srcset=""
            />
          </div>

          <div className="col-span-2 flex flex-col justify-around gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="w-full md:text-5xl text-3xl pl-4 pb-2 text-[#6388a8] font-bold">
                {post.heading}
              </h1>
              <p className="text-start pl-4 text-xl font-thin text-[#fafafa]">
                {post.description}
              </p>
            </div>
            <div className="pl-4 text-[#4a657c]">
              <h1 className="relative bottom-0">
                Shared by: <span>{post.name}</span>
              </h1>
              <p>
                Date: <span>{post.$createdAt}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default PostCard;
