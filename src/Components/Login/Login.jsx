import { useState } from "react";
import { NavLink } from "react-router-dom";
import authService from "../appwrite/auth.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginReducer,
  setAdmin,
  setLoggedInUser,
  setStudentInfo,
} from "../Store/Reducers/Reducer";
import toast from "react-hot-toast";
import admin from "../Admin/admin.js";
import database from "../appwrite/database.js";
import { useCallback, useEffect } from "react";
function Login() {
  const [disabled, setDisabled] = useState(false);
  const [process, setProcess] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setProcess("processing..");
    if (isAdmin && admin.email === email && admin.password == password) {
      await authService
        .login({ email, password })
        .then((response) => {
          setEmail("");
          setPassword("");
          dispatch(loginReducer(true));
          dispatch(setAdmin(true));
          dispatch(setLoggedInUser(response));
          toast.success("Admin Logged In Successfully");
          navigate("/");
        })
        .catch((error) => {
          setProcess("Login");
          setDisabled(false);
          toast.error("Invalid email or password! Try Again.");
        });
    } else {
      await authService
        .login({ email, password })
        .then((response) => {
          setEmail("");
          setPassword("");
          dispatch(loginReducer(true));
          dispatch(setLoggedInUser(response));
          database.getStudent(response.userId).then((res) => {
            if (res.documents && res.documents.length > 0) {
              dispatch(setStudentInfo(res.documents[0]));
            } else {
              dispatch(setStudentInfo({}));
            }
          });
          toast.success("Logged In Successfully");
          navigate("/");
        })
        .catch((error) => {
          setProcess("Login");
          setDisabled(false);
          toast.error("Invalid email or password! Try Again.");
        });
    }
  };

  const loginWithGoogle = () => {
    authService.account.createOAuth2Session(
      "google",
      "https://college-journey.vercel.app/login",
      "https://college-journey.vercel.app/login"
    );
  };
  const getUser = useCallback(() => {
    authService.getCurrentUser().then((response) => {
      authService.account.getSession("current").then((res) => {
        localStorage.setItem("sessionId", res.$id);
      });

      dispatch(loginReducer(true));
      dispatch(setLoggedInUser(response));
      database.getStudent(response.$id).then((res) => {
        if (res.documents && res.documents.length > 0) {
          dispatch(setStudentInfo(res.documents[0]));
        } else {
          dispatch(setStudentInfo({}));
        }
      });
      return true;
    }).then((resp)=>navigate('/'))
    ;
  });

  useEffect(() => getUser(), [getUser]);
  return (
    <>
      <div className="max-w-full h-auto py-16 flex justify-center items-center relative top-8">
        <div className="shadow-lg flex flex-col gap-2 justify-center items-center bg-[#fff] text-[#8aaaee] shadow-gray-950 rounded-3xl">
          <form
            onSubmit={login}
            className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 sm:px-10  sm:gap-10 gap-3 max-w-md"
          >
            <h1 className="text-xl sm:text-3xl px-5 py-2 font-bold">
              Login Form
            </h1>
            <div>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 outline-none text-black"
                type="text"
                placeholder="Enter the Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none"
                type="password"
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center items-center gap-2">
              <label className="text-sm">Are you admin?</label>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none"
                type="checkbox"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              />
            </div>
            <p className="px-2">
              If you are new user then?{" "}
              <NavLink to="../signup" className="underline">
                Signup First
              </NavLink>
            </p>
            <button
              type="submit"
              disabled={disabled}
              className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 text-md"
            >
              {process}
            </button>
          </form>
          <div className="pb-4">
            <button className="px-2" onClick={loginWithGoogle}>
              Login with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
