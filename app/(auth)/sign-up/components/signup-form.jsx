"use client"

import React from 'react';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { createUser } from '../actions';
import { useCallback } from "react";

export default function SignupForm() {

    const { pending, action, data, method } = useFormStatus();
    const [errMsg, setErrMsg] = React.useState("")

    // const validateFormErrors = useCallback(async () => {

    //     try{
    //         // console.log("test 1")
    //         const { message } = await createUser()
    //         // console.log("test 2")
    //         setErrMsg(message)
    //         console.log(message)
    //     }catch(err){
    //         console.log("Error from Client")
    //     }
    // })
    // console.log(method)

    return (
        <>
            <div className="row-arranged fullName-wrapper mt-12 flex justify-around">
                <div className="firstName-container w-5/12">
                    <label htmlFor="firstName" >First Name</label>
                    <input type="text" name="firstName" required id="firstName"
                        className="firstName-field w-full h-10 italic"
                        placeholder="Enter name"
                    />
                </div>
                <div className="lastName-container w-5/12">
                    <label htmlFor="lastName" >Last Name</label>
                    <input type="text" name="lastName" required id="lastName"
                        className="lastName-field w-full h-10 italic"
                        placeholder="Enter last name"
                    />
                </div>
            </div>
            <div className="row-arranged contacts-wrapper mt-6 flex justify-around">
                <div className="email-container w-5/12">
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" required id="email"
                        className="email-field w-full h-10 italic"
                        placeholder="Enter email"
                    />
                </div>
                <div className="phone-container w-5/12">
                    <label htmlFor="phone" >Phone</label>
                    <input type="text" name="phone" required id="phone"
                        className="phone-field w-full h-10 italic"
                        placeholder="Enter cell number"
                    />
                </div>
            </div>
            <div className="row-arranged passwords-wrapper mt-6 flex justify-around">
                <div className="password-container w-5/12">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" required id="password"
                        className="password-field w-full h-10 italic"
                        placeholder="Enter password"
                    />
                </div>
                <div className="confirmPassword-container w-5/12">
                    <label htmlFor="confirmPassword" >Confirm Password</label>
                    <input type="password" name="confirmPassword" required id="confirmPassword"
                        className="password-field w-full h-10 italic"
                        placeholder="Confirm password"
                    />
                </div>
            </div>
            <div className="privacy-policy-wrapper flex mt-8 ">
                <input type="checkbox" name="privacy-policy" required
                    className="checkbox-privacy-policy ml-1"
                />
                <p className="ml-3">
                    I have read and agree to Lumko High School Privacy Policy.
                    <Link href="#" className="text-blue-600"> Read more</Link>
                </p>
            </div>
            <div className="signup-button-wrapper mt-4 text-center w-full " >
                <button type="submit" name="signup" disabled={pending} /*onClick={validateFormErrors}*/
                    className="signup-button px-12 py-1"
                >{pending ? "Submitting...": "Sign up"}</button>
            </div>
            {/* {errMsg && (<div className="mt-4"><p>{errMsg}</p></div>)} */}
        </>
    )
}
