import React, { useEffect, useState } from "react";
import database from "../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const Registration = () => {
  const [name, setName] = useState("");
  const [process, setProcess] = useState("Registration");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const admin = useSelector((state) => state.userInfo.admin);
  function validation()
  {
    if (!admin) {
        toast.error("Your are not authorized");
        navigate("/login");
      }
  }
  useEffect(() => {
    validation();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcess("processing..");
    const file = document.getElementById("photo").files[0];
    await database
      .registration(name, year, course, file, description)
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="max-w-full h-auto py-16 flex justify-center items-center relative top-8">
        <div className="shadow-lg flex bg-[#fff] text-[#8aaaee] shadow-gray-950 rounded-3xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center h-auto border-3 sm:p-4  sm:gap-5 gap-3 w-full"
          >
            <h1 className="text-xl sm:text-3xl px-5 py-2">Registration Form</h1>
            <div className="w-full">
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 outline-none text-black w-full"
                name="year"
                type="number"
                placeholder="Enter the Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 outline-none text-black w-full"
                name="course"
                type="text"
                placeholder="Enter the Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none w-full"
                name="name"
                type="text"
                placeholder="Enter the batch name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <textarea
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none w-full"
                name="description"
                type="text"
                placeholder="Write something about the batch"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none file:outline-none file:rounded-full file:text-gray-500 file:border-none file:cursor-pointer"
                type="file"
                id="photo"
                name="photo"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 sm:text-md text-xl"
            >
              {process}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
