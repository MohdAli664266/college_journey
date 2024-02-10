import { NavLink } from "react-router-dom";

function Signup(){
    return (
        <>
            <div className="max-w-full h-auto py-16 flex justify-center items-center ">
                <div className="shadow-lg shadow-gray-950 flex bg-[#fff] text-[#8aaaee] rounded-3xl">
                    <form action="/" className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 sm:p-10  sm:gap-5 gap-2 max-w-md">
                        <h1 className="text-xl sm:text-3xl px-5 py-2">Signup Form</h1>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter your phone number' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-black rounded-full" type="text" placeholder='Enter the Email' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 text-black outline-none rounded-full" type="password" placeholder='Enter the Password' />
                        </div>
                        <p className="px-2">If you are existing user then? <NavLink to="../login" className="underline">Login</NavLink></p>
                        <button type="submit" className="bg-[#8aaaee] text-[#fff] px-10 my-2 text-md rounded-full" onClick={(e)=>{
                            e.preventDefault();
                            alert("Site is on production phase still");
                        }}>Signup</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;