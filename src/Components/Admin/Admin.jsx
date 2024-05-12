import React from "react";
import { useState, useEffect } from "react";
import database from "../appwrite/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Admin() {
  const admin = useSelector((state) => state.userInfo.admin);
  const navigate = useNavigate();
  function validation() {
    if (!admin) {
      toast.error("Your are not authorized");
      navigate("/login");
    }
  }
  
  useEffect(() => {
    // validation();
  }, []);
  return (
    <div className="grid grid-cols-10 mb-4 gap-2 py-20">
      <div className="col-span-2 text-white text-center p-4 bg-[#8aaeee]">
        <div className=" mb-4 ">
          <h1 className="text-xl font-bold cursor-pointer">Admin Panel</h1>
          <p>Welcome Mohd Ali Sir</p>
        </div>
        <div className="">
          <ul className=" flex flex-col justify-start items-start gap-2 px-2">
            
            {/* <li >
            <NavLink to="all_users"
              className={({isActive})=> `cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg ${isActive ? "shadow-md shadow-gray-950" : "bg-transparent"}`}>
              Users
            </NavLink>
            </li> */}
            <li >
            <NavLink to="all_batches"
              className={({isActive})=> `cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg ${isActive ? "shadow-md shadow-gray-950" : "bg-transparent"}`}>
              Batches
            </NavLink>
            </li>
            <li >
            <NavLink to="all_students"
              className={({isActive})=> `cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg ${isActive ? "shadow-md shadow-gray-950" : "bg-transparent"}`}>
              Students
            </NavLink>
            </li>
            <li >
            <NavLink to="all_posts"
              className={({isActive})=> `cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg ${isActive ? "shadow-md shadow-gray-950" : "bg-transparent"}`}>
              Posts
            </NavLink>
            </li>
            <li className="cursor-pointer p-1 font-sans hover:text-[#000] hover:bg-[#8aaaee] hover:shadow-md hover:shadow-gray-950 rounded-lg">
              Projects
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
        <Outlet/>
      </div>
    </div>
  );
}

export default Admin;
