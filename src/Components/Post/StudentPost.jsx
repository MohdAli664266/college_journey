import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import database from "../appwrite/database";
import toast from "react-hot-toast";
function StudentPost() {
  const [disabled, setDisabled] = useState(false);
  const [process, setProcess] = useState("Post");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const studentInfo = useSelector((state) => state.userInfo.studentInfo);
  const user = useSelector((state) => state.userInfo.user);
  function validation() {
    if (!user) {
      toast.error("Your are not authorized");
      navigate("/login");
    }
  }
  useEffect(() => {
    validation();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setProcess("processing..");
    const file = document.getElementById("photo").files[0];
    const obj = {
        batchId:studentInfo.batchId,
        studentId:studentInfo.loginId,
        name:studentInfo.name,
        heading:heading,
        description:description,
        imagePath:file,
    }
    await database
      .post(obj)
      .then((res) => {
        navigate("/batchInfo");
      })
      .catch((error)=>setDisabled(false))
  };
  return (
    <>
      <div className="max-w-full h-auto py-16 flex justify-center items-center relative top-8">
        <div className="shadow-lg flex bg-[#fff] text-[#8aaaee] shadow-gray-950 rounded-3xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center h-auto border-3 sm:p-4  sm:gap-5 gap-3 w-full"
          >
            <h1 className="text-xl sm:text-3xl px-5 py-2">Post Requirement</h1>
            <div className="w-full">
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none w-full"
                name="heading"
                type="text"
                placeholder="Heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
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
            <div className="w-full">
              <textarea
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none w-full"
                name="description"
                type="text"
                placeholder="Describe"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={disabled}
              className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 sm:text-md text-xl"
            >
              {process}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentPost;
