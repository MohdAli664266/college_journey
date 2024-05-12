import React from "react";
import { useEffect, useState } from "react";
import database from "../appwrite/database";
import PostCard from "./PostCard";
function AllPosts() {
  const [batchs, setBatch] = useState([]);
  const batch = async () => {
    await database
      .getAllPosts()
      .then((res) => {
        setBatch(res?.documents);
        // console.log(res);
      })
      .catch((error) => console.log("console error" + error));
  };
  useEffect(() => {
    batch();
  }, []);
  return (
    <>
      <div className="text-4xl text-white flex justify-center items-center py-2">
        <h1>All Post</h1>
      </div>
      <div className="grid grid-cols-5 text-xl text-white">
        <h1 className="py-2">Post Image</h1>
        <h1 className="py-2">Student Name</h1>
        <h1 className="py-2">BatchId</h1>
        <h1 className="py-2">Post Heading</h1>
      </div>
      {batchs.map((batch) => (
        <div key={batch.$id}>
          <PostCard batch={batch} />
        </div>
      ))}
    </>
  );
}

export default AllPosts;
