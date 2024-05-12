import React from "react";
import { useEffect, useState } from "react";
import database from "../appwrite/database";
import StudentCard from "./StudentCard";
function AllStudents() {
    const [batchs, setBatch] = useState([]);
  const batch = async () => {
    await database
      .getAllStudents()
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
    <div className="text-4xl text-white flex justify-center items-center py-2"><h1>All Students</h1></div>
    <div className="grid grid-cols-5 text-xl text-white">
        <h1 className="py-2">Student Image</h1>
        <h1 className="py-2">Student Name</h1>
        <h1 className="py-2">Email</h1>
        <h1 className="py-2">Batch Name</h1>
      </div>
      {
        batchs.map((batch)=>
        <div key={batch.$id}>
            <StudentCard batch={batch} />
        </div>
        )
      }
    </>
  );
}

export default AllStudents;
