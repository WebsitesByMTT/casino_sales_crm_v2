"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

   //Username & Password State
   const [logindata, setLoginData] = useState({ username: "", password: "" })
   console.log(logindata)
   //get Input Typed Data
   const handelChange = (e) => {
      const { name, value } = e.target
      setLoginData({ ...logindata, [name]: value })
   }

   //Handel Login Api is Here
   const handelLogin = () => {
      
   }

   return (
      <>
         <div className="h-screen relative w-full gradient">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
               {/* Logo */}
               <div className="pb-3.5">
                  <Image src="/assets/images/Login.png" alt="login" width={112} height={30} className="w-[6.5rem] mx-auto" />
               </div>
               {/* Login Card */}
               <div className="bg-[#5D5D5E] md:w-[350px]  pt-28 pb-24 px-14 rounded-lg">
                  <div className="space-y-4 pb-12">
                     <div className="flex items-center px-3 bg-[#D9D9D9] rounded-2xl">
                        <input type="text" value={logindata.username} onChange={(e) => handelChange(e)} placeholder="User Name" name="username" className="outline-none bg-transparent placeholder:text-[.9rem] placeholder:text-[#5D5D5E] w-full px-2 py-1 rounded-md" />
                        <FaRegUser size={18} className="text-[#5D5D5E]" />
                     </div>
                     <div className="flex items-center px-3 bg-[#D9D9D9] rounded-2xl">
                        <input type="password" placeholder="Password" name="password" value={logindata.password} onChange={(e) => handelChange(e)} className="outline-none bg-transparent placeholder:text-[.9rem] placeholder:text-[#5D5D5E] w-full px-2 py-1 rounded-md" />
                        <RiLockPasswordLine size={18} className="text-[#5D5D5E]" />
                     </div>
                  </div>
                  {/* login button */}
                  <div>
                     <button onClick={() => handelLogin()} className="w-full py-1 text-[1rem] outline-none text-white rounded-2xl hover:scale-90 transition-all gradient-red text-center">Login</button>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer
            position="top-center" // Position of the toast container
            autoClose={2000} // Time in milliseconds to close the toast automatically
            hideProgressBar={false} // Whether to hide the progress bar
            newestOnTop={true} // Whether new toasts should appear on top
            closeOnClick={true} // Whether to close the toast when clicked
            rtl={false} // Right-to-left layout
            pauseOnFocusLoss={true} // Whether to pause toast when the window loses focus
            draggable={true} // Whether to allow dragging to dismiss
            pauseOnHover={true} // Whether to pause toast when hovering
            toastStyle={{ backgroundColor: '#454547', color: 'white' }}
         />
      </>
   );
}
