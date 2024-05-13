import React, { useEffect, useState } from "react";
import database from "../appwrite/database";
import HomeCards from "./HomeCards";
import BatcheCards from "../Batches/BatcheCards";
import ProjectCard from "../Projects/ProjectCard";
import Ali from "../../assets/Mohd_Ali.jpeg";
import Anil from "../../assets/anil.jpg";
import Abbas from "../../assets/abbas.jpg";
import Yashika from "../../assets/yashika.jpg";

function Home() {
  const colors = [
    { color: "#ff0f5b" },
    { color: "#0f0" },
    { color: "lime" },
    { color: "#18fff3" },
    { color: "#18fff3" },
  ];
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
  const details = [
    {
      img: Ali,
      name: "Mohd Ali",
      profession: "Full Stack Developver",

      bio: "A motivated student with expertise in Problem Solving and Logic Building and having a good command over Data Structures and Algorithms along with positive attitude and Critical Thinking.",
      skills: ["JavaScript", "React", "HTML", "CSS", "TailwindCSS", "Android", "Python","Appwrite", "Firebase", "MongoDB", "MySQL"],
      experience: "3+ years",
      projects: ["ServiceHub", "Number System Converter", "Music Player", "College Journey"],
      education: "Bachelor's Degree in Computer Science",
      location: "Chandpur, Moradabad",
      email: "moaliansari664266@gmail.com",
      website: "https://college-journey.vercel.app",
      github: "https://github.com/mohdali664266",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      img: Anil,
      name: "Anil Kumar",
      profession: "Web Developer",

      bio: "A motivated student with expertise in Problem Solving and Logic Building and having a good command over Data Structures and Algorithms along with positive attitude and Critical Thinking.",
      skills: ["JavaScript", "React", "HTML", "CSS", "TailwindCSS"],
      projects: ["ServiceHub", "Number System Converter", "Music Player", "College Journey"],
      experience: "1+ years",
      education: "Bachelor's Degree in Computer Science",
      location: "Niswa, Rampur",
      email: "john.doe@example.com",
      website: "https://johndoe.com",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      img: Abbas,
      name: "Mohd Abbas",
      profession: "Full Stack Developer",

      bio: "A motivated student with expertise in Problem Solving and Logic Building and having a good command over Data Structures and Algorithms along with positive attitude and Critical Thinking.",
      skills: ["Python", "Tensor Flow", "HTML", "CSS", "Javascript"],
      projects: ["ServiceHub", "Number System Converter", "Music Player", "College Journey"],
      experience: "3+ years",
      education: "Bachelor's Degree in Computer Science",
      location: "Chandpur, Rampur",
      email: "mabbas432@gmail.com",
      website: "https://college-journey.vercel.app",
      github: "https://github.com/mohdali664266",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      img: Yashika,
      name: "Yashika Gupta",
      profession: "Backend Developer",

      bio: "A motivated student with expertise in Problem Solving and Logic Building and having a good command over Data Structures and Algorithms along with positive attitude and Critical Thinking.",
      skills: ["JavaScript", "AWS", "HTML", "CSS", "TailwindCSS"],
      projects: ["ServiceHub", "Number System Converter", "Music Player", "College Journey"],
      experience: "1+ years",
      education: "Bachelor's Degree in Computer Science",
      location: "Budhi Bihar, Moradabad",
      email: "john.doe@example.com",
      website: "https://johndoe.com",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mt-4 opacity-[0.6] w-full">
          <img
            className="w-full object-cover"
            src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>

        <div className="w-full absolute p-4 font-extrabold flex flex-col justify-center items-center gap-5">
          <div className="lg:text-6xl sm:text-4xl text-xl flex justify-center gap-4 items-center p-4 cursor-pointer">
            <p>Welcome to</p>
            <p className="text-white px-4 pb-1 rounded-md hover:animate-bounce duration-100">
              {" "}
              College Journey
            </p>
          </div>
          {/* developer cards for tablet and greater than tables */}
          <div className="sm:flex hidden lg:justify-center items-center p-3 gap-5 overflow-x-auto scrollbar-hide w-full">
            {details.map((detail, index) => (
              <div key={index}>
                <HomeCards detail={detail} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* developer cards for mobile */}
      <div className="w-full font-extrabold flex flex-col sm:hidden p-4 bg-[#8fb0f8] justify-center gap-4">
        <div className="text-2xl text-white font-bold px-4 py-2">
          <h1>Developers</h1>
        </div>
        <div className="gap-4 p-4 flex md:items-center overflow-x-auto scrollbar-hide">
          {details.map((detail, index) => (
            <div key={index}>
              <HomeCards detail={detail} />
            </div>
          ))}
        </div>
      </div>

      {/* batches */}
      <div className="relative w-full font-extrabold flex flex-col p-4 bg-[#94b6ff] justify-center gap-4 ">
        {/* <div className={`absolute lg:w-[180px] lg:h-[180px] w-[100px] h-[100px]  bottom-0 left-0 bg-[#ff0] rounded-tr-[100%] #94b6ff`}></div> */}
        <div className="text-2xl text-white font-bold px-4 py-2">
          <h1>Batches</h1>
        </div>
        <div className="flex gap-4 md:items-center overflow-x-auto scrollbar-hide scroll-smooth p-4">
          {batchs &&
            batchs.map((batch) => (
              <div key={batch.$id}>
                <BatcheCards batch={batch} />
              </div>
            ))}
        </div>
      </div>

      {/* Projects */}
      <div className="relative w-full font-extrabold flex flex-col p-4 justify-center gap-4 bg-[#8fb0f8]">
        {/* <div className={`absolute lg:w-[180px] lg:h-[180px] w-[100px] h-[100px]  bottom-0 right-0 bg-[lime] rounded-tl-[100%]`}></div> */}

        <div className="text-2xl text-white font-bold px-4 py-2">
          <h1>Projects</h1>
        </div>
        <div className="gap-4 p-4 flex md:items-center overflow-x-auto scrollbar-hide">
          {colors.map((value, index) => (
            <div key={index}>
              <ProjectCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
