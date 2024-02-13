import { useState } from "react";
import { NavLink } from "react-router-dom";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const check = ()=>
    {
        const user = authService.login({email, password})
        if(user)
        {
            setEmail('');
            setPassword('');
            navigate('/')
        }else
        {
            alert("Sorry! email or password is wrong");
        }
        
    }
    return (
        <>
            <div className="max-w-full h-auto py-16 flex justify-center items-center">
                <div className="shadow-lg flex bg-[#fff] text-[#8aaaee] shadow-gray-950 rounded-3xl">
                    <form action="/" className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 sm:p-10  sm:gap-10 gap-3 max-w-md">
                        <h1 className="text-xl sm:text-3xl px-5 py-2">Login Form</h1>
                        <div>
                            <input className="shadow-md bg-transparent rounded-full sm:px-2 py-1 outline-none text-black" type="text" placeholder='Enter the Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none" type="password" placeholder='Enter the Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <p className="px-2">If you are new user then? <NavLink to="../signup" className="underline">Signup First</NavLink></p>
                        <button type="submit" className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 text-md" onClick={(e)=>{
                            e.preventDefault();
                            check();
                        }}>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;