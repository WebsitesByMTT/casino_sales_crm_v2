"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import Loader from "../utility/Loader";
import { setToken } from "../utility/session/Cookies";
import { login } from "../apiconfig/Apis";

export default function Login() {
    const Router = useRouter()
    const [logindata, setLoginData] = useState({ email: "", password: "" })
    const handelChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...logindata, [name]: value })
    }
    const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    const [load, setLoad] = useState(false)
    const handelLogin = async () => {
        if (!logindata.email) {
            toast('Enter Email', { type: 'error' })
        } else if (regex.test(logindata.email) === false) {
            toast('Email is Invalid', { type: 'error' })
        }
        else if (!logindata.password) {
            toast('Enter Password', { type: 'error' })
        } else {
            try {
                setLoad(true)
                const response = await login(logindata)
                if (response.token) {
                    setToken(response.token)
                    toast(response.message, { type: 'success' })
                    Router.push('/dashboard')
                } else {
                    toast(response.error, { type: 'error' })
                }
                setLoad(false)
            } catch (error) {
                setLoad(false)
            }
        }
    }
    return (
        <>
            <div className="h-screen relative w-full gradient">
                <div className="absolute top-[50%] md:w-[60%] w-[95%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                    {/* Logo */}
                    <div className="pb-3.5">
                        <Image src="/assets/images/Login.png" alt="login" width={112} height={30} className="w-[6.5rem] mx-auto" />
                    </div>
                    {/* Login Card */}
                    <div className="bg-[#5D5D5E] mx-auto  lg:w-[350px]  pt-28 pb-24 px-14 rounded-lg">
                        <div className="space-y-4 pb-12">
                            <div className="flex items-center px-3 bg-[#D9D9D9] rounded-2xl">
                                <input onKeyDown={(e) => e.key === "Enter" && handelLogin()} type="text" value={logindata.email} onChange={(e) => handelChange(e)} placeholder="Email" name="email" className="outline-none bg-transparent placeholder:text-[.9rem] placeholder:text-[#5D5D5E] w-full px-2 py-1 rounded-md" />
                                <MdOutlineEmail size={18} className="text-[#5D5D5E]" />
                            </div>
                            <div className="flex items-center px-3 bg-[#D9D9D9] rounded-2xl">
                                <input onKeyDown={(e) => e.key === "Enter" && handelLogin()} type="password" placeholder="Password" name="password" value={logindata.password} onChange={(e) => handelChange(e)} className="outline-none bg-transparent placeholder:text-[.9rem] placeholder:text-[#5D5D5E] w-full px-2 py-1 rounded-md" />
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
            <Loader show={load} />
        </>
    );
}
