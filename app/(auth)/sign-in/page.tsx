import Link from "next/link";

export default function SignIn() {
    
    return (
        <div className="main-body">
            <div className="auth-container pb-12">
                <div className="empty-div w-2/5 m-auto pt-12"><p>.</p></div>
                <div className="form-wrapper m-auto p-12">
                    <div className="text-center text-xl"><h3>Hi there... Let us get started</h3></div>
                    <div className="text-center mt-6"><p>Sign in to continue with your application</p></div>
                    <form className="form-container">
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
                            <input type="submit" name="sign-in-button" value="Sign in" 
                                className="login-button submit-button py-1 px-4 active"
                            />
                            <p><Link href="/forgot-password" className="text-blue-600">Forgot password?</Link></p>
                        </div>
                    </form> 
                    <div className="w-4/5 m-auto mt-6 text-center">
                        <p>Need an account? <Link href="/sign-up" className="text-blue-600">Sign up now</Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}