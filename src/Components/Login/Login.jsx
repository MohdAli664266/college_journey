import { useState } from "react";
import { NavLink } from "react-router-dom";
import authService from "../appwrite/auth.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../Store/Reducers/Reducer";
import toast from "react-hot-toast";

function Login() {
  const [process, setProcess] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userInfo.user);
  const login = async (e) => {
    e.preventDefault();
    setProcess("processing..");
    console.log(authService)
    await authService.login({ email, password })
      .then((response) => {
        setEmail("");
        setPassword("");
        dispatch(loginReducer(true));
        dispatch(setAdmin(true));
        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        setProcess("Login");
        toast.error("Invalid email or password! Try Again.");
      });
  };
  return (
    <>
      <div className="max-w-full h-auto py-16 flex justify-center items-center relative top-8">
        <div className="shadow-lg flex bg-[#fff] text-[#8aaaee] shadow-gray-950 rounded-3xl">
          <form
            onSubmit={login}
            className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 sm:p-10  sm:gap-10 gap-3 max-w-md"
          >
            <div className="flex justify-center items-center gap-4 text-2xl px-2 lg:text-4xl text-white bg-yellow-400">
              <button className="rounded-full text-center px-2" onClick={()=>setIsAdmin(false)}>Login</button>
              <button className="rounded-full text-center px-2" onClick={()=>setIsAdmin(true)}>Admin</button>
            </div>
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
            <p className="px-2">
              If you are new user then?{" "}
              <NavLink to="../signup" className="underline">
                Signup First
              </NavLink>
            </p>
            <button
              type="submit"
              className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 text-md"
            >
              {process}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
