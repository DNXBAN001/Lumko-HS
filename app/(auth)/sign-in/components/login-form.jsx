"use client"

import React from 'react'
import Link from "next/link";
import { useFormStatus } from 'react-dom';

export default function LoginFormorm() {

    const { pending, data, action } = useFormStatus()

    return (
        <>
            <div className="email-container w-4/5 m-auto mt-8">
                <label htmlFor="email-field" >Email</label>
                <input type="email" name="email" required id="email-field"
                    className="email-field w-full h-10 italic"
                    placeholder="Enter email here"
                />
            </div>
            <div className="password-container w-4/5 m-auto mt-5">
                <label htmlFor="password-field" >Password</label>
                <input type="password" name="password" required id="password-field"
                    className="password-field w-full h-10 italic"
                    placeholder="Enter password here"
                />
            </div>
            <div className="login-button-wrapper w-4/5 m-auto mt-8 flex justify-between">
                <button type="submit" name="sign-in-button" disabled={pending}
                    className="login-button submit-button py-1 px-4 active"
                >{pending ? "Signing in...": "Sign in"}</button>
                <p><Link href="/forgot-password" className="text-blue-600">Forgot password?</Link></p>
            </div>
        </>
    )
}
