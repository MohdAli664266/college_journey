import React from "react";
import { useSelector } from "react-redux";

const DeveloperProfile = () => {
  const developer = useSelector((state)=>state.userInfo.developercard);

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
          <h2 className="text-lg font-semibold mt-4">Projects:</h2>
          <ul className="list-disc pl-5">
            {developer.projects.map((skill, index) => (
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
