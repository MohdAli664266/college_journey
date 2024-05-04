import React from "react";
import imageUrl from "../../assets/Mohd_Ali.jpeg";
function StudentCard() {
  return (
    <div className="relative flex md:gap-4 backdrop-blur-sm">
      <div className="relative md:w-[210px] w-[150px] flex flex-col justify-center items-center shadow-md shadow-gray-950 md:gap-5 gap-1">
        <div className="flex flex-col justify-center items-center pt-2">
          <img
            className=" md:w-[100px] md:h-[100px] sm:w-[120px] sm:h-[120px] w-[120px] h-[120px] object-cover hover:cursor-pointer shadow-md shadow-gray-950"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col px-2 sm:gap-2 gap-1 mb-2">
          <div className="flex bg-[#40ff00]">
            <h1 className="font-bold">Name:</h1>
            <p className="text-[#fff] mx-1 font-thin">Mohd Ali</p>
          </div>
          <div className="flex bg-[#40ff00]">
            <h1 className="font-bold">Course:</h1>
            <p className="text-[#fff] mx-1 font-thin">B.Tech</p>
          </div>
          <div className="flex">
            <h1 className="font-bold">City:</h1>
            <p className="text-[#fff] mx-1 font-thin">Moradabad</p>
          </div>
          <div className="flex">
            <h1 className="font-bold">State:</h1>
            <p className="text-[#fff] mx-1 font-thin">Uttar Pradesh</p>
          </div>

          <hr className="bg-transparent border-1 border-[#fff] w-full" />
          <button className="bg-transparent md:px-4 px-1 sm:text-lg hover:translate-y-0.5 duration-200 text-white font-thin">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;