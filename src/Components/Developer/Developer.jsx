import React from "react";

const DeveloperProfile = () => {
  const developer = {
    name: "Mohd Ali",
    bio: "A motivated student with expertise in Problem Solving and Logic Building and having a good command over Data Structures and Algorithms along with positive attitude and Critical Thinking.",
    skills: ["JavaScript", "React", "HTML", "CSS", "TailwindCSS"],
    experience: "3+ years",
    education: "Bachelor's Degree in Computer Science",
    location: "Chandpur, Moradabad",
    email: "john.doe@example.com",
    website: "https://johndoe.com",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-white/10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-2xl font-bold">{developer.name}</h1>
          <p className="text-gray-600">{developer.bio}</p>
          <h2 className="text-lg font-semibold mt-4">Skills:</h2>
          <ul className="list-disc pl-5">
            {developer.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-4">Experience:</h2>
          <p className="text-gray-600">{developer.experience}</p>
          <h2 className="text-lg font-semibold mt-4">Education:</h2>
          <p className="text-gray-600">{developer.education}</p>
          <h2 className="text-lg font-semibold mt-4">Location:</h2>
          <p className="text-gray-600">{developer.location}</p>
          <h2 className="text-lg font-semibold mt-4">Contact:</h2>
          <p className="text-gray-600">Email: {developer.email}</p>
          <p className="text-gray-600">
            Website: <a href={developer.website}>{developer.website}</a>
          </p>
          <p className="text-gray-600">
            GitHub: <a href={developer.github}>{developer.github}</a>
          </p>
          <p className="text-gray-600">
            LinkedIn: <a href={developer.linkedin}>{developer.linkedin}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
