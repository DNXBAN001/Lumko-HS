"use client"

import React from 'react';
import Link from 'next/link';
import { createUser } from '../actions';

export default function SignupForm(props: any) {

    // const [isPending, formAction] = React.useActionState(createUser, undefined)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        console.log("Is loading has chaged to: ", isLoading)
    }, [isLoading])

    function handleSignupButton(){
        setIsLoading(true)
        setTimeout(() => {

        }, 4000)
        setIsLoading(false)
    }

    return (
        <form className="" action={createUser} >
            <div className="row-arranged fullName-wrapper mt-12 flex justify-around">
                <div className="firstName-container w-5/12">
                    <label htmlFor="firstName-field" >First Name</label>
                    <input type="text" name="firstName" required id="firstName-field"
                        className="firstName-field w-full h-10 italic"
                        placeholder="Enter name"
                    />
                </div>
                <div className="lastName-container w-5/12">
                    <label htmlFor="lastName-field" >Last Name</label>
                    <input type="text" name="lastName" required id="lastName-field"
                        className="lastName-field w-full h-10 italic"
                        placeholder="Enter last name"
                    />
                </div>
            </div>
            <div className="row-arranged contacts-wrapper mt-6 flex justify-around">
                <div className="email-container w-5/12">
                    <label htmlFor="email-field" >Email</label>
                    <input type="email" name="email" required id="email-field"
                        className="email-field w-full h-10 italic"
                        placeholder="Enter email"
                    />
                </div>
                <div className="phone-container w-5/12">
                    <label htmlFor="phone-field" >Phone</label>
                    <input type="text" name="phone" required id="phone-field"
                        className="phone-field w-full h-10 italic"
                        placeholder="Enter cell number"
                    />
                </div>
            </div>
            <div className="row-arranged passwords-wrapper mt-6 flex justify-around">
                <div className="password-container w-5/12">
                    <label htmlFor="password-field" >Password</label>
                    <input type="password" name="password" required id="password-field"
                        className="password-field w-full h-10 italic"
                        placeholder="Enter password"
                    />
                </div>
                <div className="confirmPassword-container w-5/12">
                    <label htmlFor="password-field" >Confirm Password</label>
                    <input type="password" name="confirmPassword" required id="confirm-password-field"
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
            <div className="signup-button-wrapper mt-4 text-center w-full" onClick={handleSignupButton}>
                <input type="submit" name="signup" value={isLoading ? "submitting...": "Sign up"} disabled={isLoading}
                    className="signup-button px-12 py-1 active"
                />
            </div>
        </form>
    )
}
