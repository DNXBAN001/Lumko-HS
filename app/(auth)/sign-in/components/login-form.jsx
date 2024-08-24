"use client"

import React from 'react'
import Link from "next/link";
import LoginButton from "./login-button"
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/utils/context';
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
    const { setUser, isLoading, setIsLoading } = useGlobalContext()
    const cookies = new Cookies()

    const [resMsg, setResMsg] = React.useState("")
    const router = useRouter()

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => (
            { ...prevFormData, [name]: value}
        ))

    }
    async function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)
        try{
            const res = await fetch('/api/sign-in', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                }).then(result => result.json())
            setIsLoading(false)
            console.log(res)
            if(res.status === 200){
                setResMsg(res.message)
                // saveTokenInCookies(res.accessToken)
                // const { userId, userRole } = jwtDecode(cookies.get("accessToken"))//decode token to extract user payload
                // setUser({ userId, userRole })
                if(res.user.role === "admin"){
                    router.push("/admin/dashboard")
                }else if(res.user.role === "applicant"){
                    router.push("/apply")
                }

            }else{
                setResMsg(res.message)
            }
        }catch(err){
            alert("Unexpected error: ", err)
        }
    }

    function saveTokenInCookies(accessToken){
        cookies.set("accessToken", accessToken, {
            expires: new Date(Date.now() + 1000*60*30)//expire in 30mins
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="email-container w-4/5 m-auto mt-8">
                <label htmlFor="email-field" >Email</label>
                <input type="email" name="email" required id="email-field"
                    className="email-field w-full h-10 italic" onChange={handleChange}
                    placeholder="Enter email here"
                />
            </div>
            <div className="password-container w-4/5 m-auto mt-5">
                <label htmlFor="password-field" >Password</label>
                <input type="password" name="password" required id="password-field"
                    className="password-field w-full h-10 italic" onChange={handleChange}
                    placeholder="Enter password here"
                />
            </div>
            {resMsg && (<p className="text-red-500 text-center w-4/5 m-auto mt-6">{resMsg}</p>)}
            <div className="login-button-wrapper w-4/5 m-auto mt-8 flex justify-between">
                <LoginButton pending={isLoading}/>
                <p><Link href="/forgot-password" className="text-blue-600">Forgot password?</Link></p>
            </div>
        </form>
    )
}
