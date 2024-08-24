"use client"

import React from 'react'
import Link from "next/link";
import LoginButton from "./login-button"
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [formData, setFormData] = React.useState({
        email: "jknasjk",
        password: "cknsdk"
    })
    const [resMsg, setResMsg] = React.useState("")
    const router = useRouter()

    // function setFormInfo(){
    //     let finalFormData = new FormData()
    //     finalFormData.set("email", formData.email)
    //     finalFormData.set("password", formData.password)
    //     return finalFormData
    // }
    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => (
            { ...prevFormData, [name]: value}
        ))

    }
    async function handleSubmit(event){
        event.preventDefault()
        // const res = await fetch('/api/sign-in', {
        //         method: 'POST',
        //         body: formData,
        //     })
        const res = await axios.post("/api/sign-in", formData)
        if(res.data.status === 200){
            setResMsg(res.data.message)
            if(res.data.user.role === "admin"){
                router.push("/admin/dashboard")
            }else if(res.data.user.role === "applicant"){
                router.push("/apply")
            }

        }else{
            setResMsg(res.data.message)
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
                <LoginButton />
                <p><Link href="/forgot-password" className="text-blue-600">Forgot password?</Link></p>
            </div>
        </form>
    )
}
