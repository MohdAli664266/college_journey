import React, { useState } from 'react';
import { Client, Storage , ID} from "appwrite";
import conf from '../../conf/conf';
import authService from '../appwrite/auth';
const Registration = () => {


  const [formData, setFormData] = useState({
    year: '',
    course: '',
    name: '',
    id: '',
    photo: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileHandling = (e) =>{
    console.log(e.target.file[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.projectId);
  
    const storage = new Storage(client);
  
    const promise = storage.createFile(
      conf.bucketId,
      ID.unique(),
      document.getElementById('photo').files[0]
    );
    promise.then(function (response) {
      console.log(response); // Success
      alert("Your registration has been completed successfully");
    }, function (error) {
        console.log(error); // Failure
    });
  };

  return (
    <div className="max-w-md mx-auto my-5 bg-white p-4 rounded-3xl text-[#8aaaee] shadow-lg shadow-gray-950">
      <h2 className="text-2xl font-semibold mb-4 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="year" className="block text-xl font-medium mb-1">Year</label>
          <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} className="p-2 rounded-full outline-none shadow-sm shadow-gray-950 block w-full sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="course" className="block text-xl font-medium mb-1">Course</label>
          <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} className="p-2 rounded-full outline-none shadow-sm shadow-gray-950 block w-full sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-xl font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="p-2 rounded-full outline-none shadow-sm shadow-gray-950 block w-full sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-xl font-medium mb-1">Photo</label>
          <input type="file" id="photo" name="photo" onChange={fileHandling} className="p-2 rounded-full outline-none shadow-sm shadow-gray-950 block w-full sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-xl font-medium  mb-1">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="p-2 rounded-full outline-none shadow-sm shadow-gray-950 block w-full sm:text-sm" />
        </div>
        <div className='flex gap-3'>
          <button type="reset" className="bg-[#88ccee] text-white py-2 px-4 rounded-full">Reset</button>
          <button type="submit" className="bg-[#88ccee] text-white py-2 px-4 rounded-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
