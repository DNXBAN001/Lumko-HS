import Link from "next/link";

export default function SignIn() {
    
    return (
        <div className="main-body">
            <div className="auth-container pb-12">
                <div className="empty-div w-2/5 m-auto pt-12"><p>.</p></div>
                <div className="form-wrapper m-auto px-10 py-12">
                    <div className="text-center text-xl"><h3>Are you new here?</h3></div>
                    <div className="text-center mt-6"><p>Let us help you sign up. This will be quick.</p></div>
                    <form className="">
                        <div className="row-arranged mt-12 flex justify-around">
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
                        <div className="row-arranged mt-6 flex justify-around">
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
                        <div className="row-arranged mt-6 flex justify-around">
                            <div className="password-container w-5/12">
                                <label htmlFor="password-field" >Password</label>
                                <input type="password" name="password" required id="password-field"
                                    className="password-field w-full h-10 italic"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="password-container w-5/12">
                                <label htmlFor="password-field" >Confirm Password</label>
                                <input type="password" name="password" required id="password-field"
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
                        <div className="signup-button-wrapper mt-4 text-center w-full">
                            <input type="submit" name="sign-up" value="Sign up"
                                className="signup-button px-12 py-1"
                            />
                        </div>
                    </form> 
                    <div className="w-4/5 m-auto mt-6 text-center">
                        <p>Aleady have an account? <Link href="/sign-up" className="text-blue-600">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}