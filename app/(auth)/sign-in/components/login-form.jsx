"use client"

import React from 'react'
import Link from "next/link";
import LoginButton from "./login-button"
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/utils/context';

export default function LoginForm() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
    const { user, setUser, isLoading, setIsLoading, setIsLoggedIn } = useGlobalContext()

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
            if(res.success){
                setResMsg(res.message)
                setUser(res.user)//set global user for client components
                setIsLoggedIn(true)
                if(res.user.role === "admin"){
                    console.log("Going to admin dashboard...")
                    router.push("/admin/dashboard")
                }else if(res.user.role === "applicant"){
                    console.log("Going to applicant page...")
                    router.push("/apply")
                }

            }else{
                setResMsg(res.message)
            }
        }catch(err){
            alert("Unexpected error: ", err)
        }
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
