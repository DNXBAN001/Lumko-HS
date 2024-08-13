import React from 'react'
import Link from "next/link"

export default function ForgotPassword() {

    return (
        <div className="main-body">
            <div className="auth-container forgot-password-container pb-12">
                <div className="empty-div w-2/5 m-auto pt-12"><p>.</p></div>
                <div className="form-wrapper m-auto p-12">
                    <div className="text-center text-xl"><h3>Let us help you regain access to your account</h3></div>
                    <div className="text-center mt-6"><p>Type your email below</p></div>
                    <form className="">
                        <div className="email-container w-4/5 m-auto mt-8">
                            <label htmlFor="email-field" >Email</label>
                            <input type="email" name="email" required id="email-field"
                                className="email-field w-full h-10 italic"
                                placeholder="Enter email here"
                            />
                        </div>
                        <div className='submit-button-container w-4/5 m-auto mt-8 text-center'>
                            <input type="submit" name="forgot-password" value="Submit" 
                                className="forgot-password-submit-button py-2"
                            />
                        </div>
                    </form> 
                    <div className="w-4/5 m-auto mt-6 text-center">
                        <p>Go back to<Link href="/sign-in" className="text-blue-600"> Login</Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
