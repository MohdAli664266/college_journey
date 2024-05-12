import React from "react";
import BatchSample from "./BatchSample";
import { useEffect, useState } from "react";
import database from "../appwrite/database";
function AllUsers() {
    const [batchs, setBatch] = useState([]);
  const batch = async () => {
    await database
      .getAllBatches()
      .then((res) => {
        setBatch(res?.documents);
      })
      .catch((error) => console.log("console error" + error));
  };
  useEffect(() => {
    batch();
  }, []);
  return (
    <>
    <div className="text-4xl text-white flex justify-center items-center"><h1>All Users</h1></div>
    <div className="grid grid-cols-4 text-xl text-white">
        <h1 className="py-2"></h1>
        <h1 className="py-2">Student Name</h1>
        <h1 className="py-2">BatchId</h1>
      </div>
      {
        batchs.map((batch)=>
        <div key={batch.$id}>
            <BatchSample batch={batch} />
        </div>
        )
      }
    </>
  );
}

export default AllUsers;
