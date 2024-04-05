import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginReducer } from "../Store/Reducers/Reducer";
function Signup(){

    const [name, setName] = useState('');
    const [process, setProcess] = useState('Signup');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createAcount =async (e)=>
    {
        e.preventDefault();
        setProcess('processing..')
        await authService.creatAccount({email, password, name, phone})
        .then((response)=>{
            setEmail('')
            setName('')
            setPassword('')
            setPhone('')
            const userState = useSelector(state => state.userInfo.user);
            dispatch(loginReducer(userState))  
            alert("Thank you for signup")
            navigate('/verification')
        })
        .catch((response)=>
        {
            authService.account.createVerification("http://localhost:5173/verification")
            .then((response)=>
                console.log('verification console',response))
            .catch((error)=>console.log('verication error',error))
        })
        .catch((error)=>{
            console.log(error)
            setProcess('Signup')
        })
    }
    return (
        <>
            <div className="max-w-full h-auto py-16 flex justify-center items-center relative top-8">
                <div className="shadow-lg shadow-gray-950 flex bg-[#fff] text-[#8aaaee] rounded-3xl">
                    <form onSubmit={createAcount} className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 sm:p-10  sm:gap-5 gap-2 max-w-md">
                        <h1 className="text-xl sm:text-3xl px-5 py-2">Signup Form</h1>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter your phone number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter the Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 text-black outline-none rounded-full" type="password" placeholder='Enter the Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <p className="px-2">If you are existing user then? <NavLink to="../login" className="underline">Login</NavLink></p>
                        <button type="submit" className="bg-[#8aaaee] text-[#fff] px-10 my-2 text-md rounded-full">{process}</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;