"use client"

import React from 'react';
import Link from 'next/link';
import SignupButton from "./signup-button";
import { useGlobalContext } from '@/utils/context';
import { useRouter } from 'next/navigation';

export default function SignupForm() {

    const { setUser, isLoading, setIsLoading } = useGlobalContext();
    const [resMsg, setResMsg] = React.useState("")
    const router = useRouter()
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({ 
                ...prevFormData, 
                [name]: type === "checkbox" ? checked: value
            }
        ))

    }

    async function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)
        try{
            const res = await fetch("/api/sign-up", {
                method: 'POST',
                body: JSON.stringify(formData)
            }).then(result => result.json())
            setResMsg(res.message)
            setIsLoading(false)
            if(res.success){
                setUser(res.user)
                if(res.user.role === "admin"){
                    router.push("/admin/dashboard")
                }else if(res.user.role === "applicant"){
                    router.push("/apply")
                }
            }
        }catch(err){
            alert("Unexpected error: "+err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row-arranged fullName-wrapper mt-12 flex justify-around">
                <div className="firstName-container w-5/12">
                    <label htmlFor="firstName" >First Name</label>
                    <input type="text" name="firstName" required id="firstName"
                        className="firstName-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Enter name"
                    />
                </div>
                <div className="lastName-container w-5/12">
                    <label htmlFor="lastName" >Last Name</label>
                    <input type="text" name="lastName" required id="lastName"
                        className="lastName-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Enter last name"
                    />
                </div>
            </div>
            <div className="row-arranged contacts-wrapper mt-6 flex justify-around">
                <div className="email-container w-5/12">
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" required id="email"
                        className="email-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <div className="phone-container w-5/12">
                    <label htmlFor="phone" >Phone</label>
                    <input type="text" name="phone" required id="phone"
                        className="phone-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Enter cell number"
                    />
                </div>
            </div>
            <div className="row-arranged passwords-wrapper mt-6 flex justify-around">
                <div className="password-container w-5/12">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" required id="password"
                        className="password-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Enter password"
                    />
                </div>
                <div className="confirmPassword-container w-5/12">
                    <label htmlFor="confirmPassword" >Confirm Password</label>
                    <input type="password" name="confirmPassword" required id="confirmPassword"
                        className="password-field w-full h-10 italic" onChange={handleChange}
                        placeholder="Confirm password"
                    />
                </div>
            </div>
            <div className="privacy-policy-wrapper flex mt-8 ">
                <input type="checkbox" name="privacy-policy" required
                    className="checkbox-privacy-policy ml-1" onChange={handleChange}
                />
                <p className="ml-3">
                    I have read and agree to Lumko High School Privacy Policy.
                    <Link href="#" className="text-blue-600"> Read more</Link>
                </p>
            </div>
            <div className="signup-button-wrapper mt-4 text-center w-full " >
                <SignupButton pending={isLoading}/>
            </div>
            {resMsg && (<div className="mt-4 text-red-500 text-center"><p>{resMsg}</p></div>)}
        </form>
    )
}
