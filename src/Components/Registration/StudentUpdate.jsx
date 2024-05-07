import React, { useEffect, useState } from "react";
import { setStudentInfo } from "../Store/Reducers/Reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import database from "../appwrite/database";
import toast from "react-hot-toast";

function StudentRegistration() {
  const [disabled, setDisabled] = useState(false);
  const [register, setRegister] = useState("Update");
  const userInfo = useSelector((state) => state.userInfo);
  const [loginId, setLoginId] = useState(userInfo.loggedInUser?.userId);

  const [name, setName] = useState(userInfo.studentInfo?.name);
  const [email, setEmail] = useState(userInfo.loggedInUser?.providerUid);
  const [phone, setPhone] = useState(userInfo.studentInfo?.phone);
  const [batchName, setBatchName] = useState(userInfo.studentInfo?.batchname);
  const [batchId, setBatchId] = useState(userInfo.studentInfo?.batchId);
  const [batchPassword, setBatchPassword] = useState(
    userInfo.studentInfo?.batchPassword
  );
  const [city, setCity] = useState(userInfo.studentInfo?.city);
  const [state, setState] = useState(userInfo.studentInfo?.state);
  const [pin, setPin] = useState(userInfo.studentInfo?.pin);
  const [courName, setCourseName] = useState(userInfo.studentInfo?.courseName);
  const [highestQualification, setHighestQualification] = useState(
    userInfo.studentInfo?.highestQualification
  );
  const [intermediate, setIntermediate] = useState(
    userInfo.studentInfo?.intermediate
  );
  const [internship, setInternship] = useState(
    userInfo.studentInfo?.internship
  );
  const [certificate, setCetificate] = useState(
    userInfo.studentInfo?.certificateName
  );
  const [achievement, setAchievement] = useState(
    userInfo.studentInfo?.achievement
  );
  const [skills, setSkills] = useState(userInfo.studentInfo?.skills);
  const [projects, setProject] = useState(userInfo.studentInfo?.projects);
  const [githubLink, setGithubLink] = useState(
    userInfo.studentInfo?.githubLink
  );

  const [allBatch, setAllBatch] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo.user) {
      navigate("/login");
    }
    database.getAllBatches().then((response) => {
      setAllBatch(response.documents);
      console.log(response.documents);
    });
  }, []);

  const onRegister = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setRegister("Processing...");
    const file = document.getElementById("photo").files[0];
    const obj = {
      name: name,
      email: email,
      phone: phone,
      batchname: batchName,
      batchId: batchId,
      batchPassword: batchPassword,
      city: city,
      state: state,
      pin: pin,
      courseName: courName,
      highestQualification: highestQualification,
      intermediate: intermediate,
      internship: internship,
      certificateName: certificate,
      achievement: achievement,
      loginId: loginId,
      skills: skills,
      projects: projects,
      githubLink: githubLink,
      image:file,
    }
    dispatch(setStudentInfo(obj))
    await database
      .updateStudent(obj)
      .then((response) => {
        toast.success("Updated successfully");
        navigate("/student_info");
      })
      .catch((error) => {
        setDisabled(false);
        setRegister("Register");
      });
  };

  const handleDropdown = (e) => {
    setBatchName(e.target.value);
  };
  return (
    <div className="py-20 flex justify-center items-center bg-[#6f8fd4]">
      <div className="p-5 flex justify-center items-center">
        <form
          onSubmit={onRegister}
          action=""
          className="flex flex-col justify-center items-center text-white gap-4"
        >
          <h1 className="sm:text-4xl text-2xl p-4 text-white font-bold">
            Update Student Form
          </h1>
          <div className="grid sm:grid-cols-3 grid-cols-2 justify-center items-center gap-4 px-10">
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="Number"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="phone"
                required
              />
            </div>
            <div>
              <div className="flex gap-4 bg-transparent">
                <label htmlFor="batch">Batch Name</label>
                <select
                  value={batchName}
                  id="batch"
                  disabled
                  className="text-black outline-none border-none bg-transparent"
                  onChange={handleDropdown}
                >
                  {allBatch &&
                    allBatch.map((items, index) => (
                      <option key={index} value={items.name}>
                        {items.name}
                      </option>
                    ))}
                </select>
              </div>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={batchName}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="batchId">BatchatchId</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={batchId}
                onChange={(e) => setBatchId(e.target.value)}
                name="batchId"
                id="batchId"
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="password">Batch Password</label>
              <input
                type="password"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={batchPassword}
                onChange={(e) => setBatchPassword(e.target.value)}
                name="password"
                id="password"
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                id="city"
                required
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="state"
                id="state"
                required
              />
            </div>
            <div>
              <label htmlFor="pin">Pin</label>
              <input
                type="Number"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                name="pin"
                id="pin"
                required
              />
            </div>
            <div>
              <label htmlFor="education">Course Name</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={courName}
                onChange={(e) => setCourseName(e.target.value)}
                name="education"
                id="education"
                required
              />
            </div>
            <div>
              <label htmlFor="state">Highest Qualification</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={highestQualification}
                onChange={(e) => setHighestQualification(e.target.value)}
                name="state"
                id="state"
                required
              />
            </div>
            <div>
              <label htmlFor="pin">Intermediate Percentage</label>
              <input
                type="Number"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={intermediate}
                onChange={(e) => setIntermediate(e.target.value)}
                name="pin"
                id="pin"
                required
              />
            </div>
            <div>
              <label htmlFor="internship">Internship (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={internship}
                onChange={(e) => setInternship(e.target.value)}
                name="internship"
                id="internship"
              />
            </div>
            <div>
              <label htmlFor="certificate">Certificate Name (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={certificate}
                onChange={(e) => setCetificate(e.target.value)}
                name="certificate"
                id="certificate"
              />
            </div>
            <div>
              <label htmlFor="achievement">Achievements (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
                name="achievement"
                id="achievement"
              />
            </div>
            <div>
              <label htmlFor="achievement">Skills (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                name="skills"
                id="skills"
              />
            </div>
            <div>
              <label htmlFor="achievement">Project Name (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={projects}
                onChange={(e) => setProject(e.target.value)}
                name="projects"
                id="projects"
              />
            </div>
            <div>
              <label htmlFor="achievement">Github Link (Optional)</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white border-b-2 border-white/50"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                name="githubLink"
                id="githubLink"
              />
            </div>
            <div>
              <label htmlFor="photo">Upload photo</label>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none file:outline-none file:rounded-full file:text-gray-500 file:border-none file:cursor-pointer"
                type="file"
                id="photo"
                name="photo"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={disabled}
            className="hover:bg-[#5870a3] px-2 text-2xl rounded-sm hover:bg-transparent"
          >
            {register}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistration;
