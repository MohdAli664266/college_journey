import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import database from "../appwrite/database";
import { useDispatch } from "react-redux";
import { setStudentInfo } from "../Store/Reducers/Reducer";

const Resume = () => {
    const dispatch = useDispatch();
  const studentInfo = useSelector((state) => state.userInfo.studentInfo);
    
  return (
    <div className="p-4 py-20 mx-10">
      {/* Header Section */}
      <header className="text-center bg-blue-500 text-white py-6 rounded-lg">
        <h1 className="text-4xl font-bold">{studentInfo.name}</h1>
        <p className="text-2xl">{studentInfo.batchname}</p>
      </header>

      {/* Personal Details Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <p>
            <span className="font-bold">Email:</span> {studentInfo.email}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {studentInfo.phone}
          </p>
          <p>
            <span className="font-bold">Address:</span>{" "}
            {studentInfo.city + "," + studentInfo.state + "," + studentInfo.pin}
          </p>
          <p>
            <span className="font-bold">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/">Your LinkedIn Profile</a>
          </p>
          <p>
            <span className="font-bold">GitHub:</span>{" "}
            <a href={studentInfo.githubLink}>Your GitHub Profile</a>
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <p className="text-lg">
            <span className="font-bold">Your Degree</span> -{studentInfo.highestQualification} Your Institution
          </p>
          <p className="text-lg">
            <span className="font-bold">Intermediate Percentage </span>: {studentInfo.intermediate}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <h3 className="text-lg font-bold">Your Job Title</h3>
          <p className="text-md">
            <span className="font-bold">Company Name</span> - Date Range
          </p>
          <p>Job Description</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <h3 className="text-lg font-bold">Project Name</h3>
          <ul style={{ listStyleType: 'disc' }} className="px-4">
            {
                studentInfo && studentInfo.projects.map((itme, index)=>
                <li key={index}>{itme}</li>
                )
            }
          </ul>
        </div>
      </section>

      {/* Trainings Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Trainings</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <p>Training Program Name - Organization (Year)</p>
          <p>Training Description</p>
        </div>
      </section>

      {/* Internships Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Internships</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <p>Internship Position - Company Name (Year)</p>
          <p>Internship Description</p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Certificates</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <p> <b>Certificate Name</b> - {studentInfo.certificateName}</p>
          <p> <b>Certificate Description</b>- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium totam dolorem officia sapiente asperiores dignissimos accusantium facilis, distinctio sint voluptas, quae deleniti minima dolore provident amet, eum ea ducimus modi.</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Achievements</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <ul>
            <li>{studentInfo.achievement}</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <div className="bg-white/10 rounded shadow p-4">
          <ul style={{ listStyleType: 'disc' }} className="px-4">
            {
                studentInfo && studentInfo.skills.map((itme, index)=>
                <li key={index}>{itme}</li>
                )
            }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
