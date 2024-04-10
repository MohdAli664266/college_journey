import React from "react";
import { useState, useEffect } from "react";
import BatchSample from "./BatchSample";
import database from "../appwrite/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Admin() {
  const admin = useSelector((state) => state.userInfo.admin);
  const navigate = useNavigate();
  function validation() {
    if (!admin) {
      toast.error("Your are not authorized");
      navigate("/login");
    }
  }
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
    validation();
  }, []);
  return (
    <div className="grid grid-cols-10 mb-4 gap-2 mt-4">
      <div className="col-span-2 text-white text-center p-4 bg-[#8aaeee]">
        <div className=" mb-4 ">
          <h1 className="text-xl font-bold cursor-pointer">Admin Panel</h1>
          <p>Welcome Mohd Ali Sir</p>
        </div>
        <div className="">
          <ul className=" flex flex-col justify-start items-start gap-2 px-2">
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Users
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Batches
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Projects
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Posts
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Members
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              All Content
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-8 bg-[#8aaeee]">
        <div className="mr-10">
          <div className="py-4">
            <h1 className="text-center text-2xl font-bold text-white ">
              I am heading of this
            </h1>
          </div>
          <div className="flex flex-col gap-2 p-2 ">
            {batchs &&
              batchs.map((batch) => (
                <div key={batch.$id}>
                  <BatchSample batch={batch} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
