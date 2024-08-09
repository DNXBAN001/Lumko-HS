import Image from "next/image";
import Link from "next/link";

export default function Admissions() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-4-reduced.jpg" width={1910} height={600} priority={true} alt="banner-image"/>
            </div>
            <div className="admissions-container w-4/5 m-auto mt-12 mb-16">
                <h1 className="text-3xl text-center">Application Information</h1>
                <div className="application-info mt-12">
                    <div className="xy mt-12 ml-16">
                        <h3 className="how-to-apply text-xl">Grade 8:</h3>
                        <p>Applications for Grade 8 2025 open on 01 March and the closing date is 8 July 2024</p>
                    </div>
                    <h3 className="how-to-apply text-xl mt-12 ml-16">How to apply?</h3>
                    <div className="steps-wrapper mt-10 flex justify-around pl-1">
                        <div className="step-wrapper w-2/5">
                            <h3>Step 1: <span className="text-blue-700"><Link href="/sign-up">Create Account</Link></span></h3>
                            <p className="mt-2">Applicant needs to have an account in order to proceed with the application process.
                                If you do not have an existing account: Click 
                                <span className="text-blue-700 underline"><Link href="/sign-up"> here </Link></span>to create one
                            </p>
                        </div>
                        <div className="step-wrapper step-wrapper-even w-2/5">
                            <h3>Step 2: <span className="text-blue-700"><Link href="/sign-in">Sign in</Link></span></h3>
                            <p className="mt-2">After signing up for an account you can then login to start with the application.
                                If you already have an account, 
                                <span className="text-blue-700 underline"><Link href="/sign-in"> sign-in here </Link></span>
                                to start your application
                            </p>
                        </div>
                    </div>
                    <div className="steps-wrapper mt-8 flex justify-around pl-1">
                        <div className="step-wrapper w-2/5">
                            <h3>Step 3: <span className="text-black">Fill in Application Form</span></h3>
                            <p className="mt-2">Once you have successfully created an account and signed in, 
                                you can start filling the application form</p>
                        </div>
                        <div className="step-wrapper step-wrapper-even w-2/5">
                            <h3>Step 4: <span className="text-black">Submit Application Form</span></h3>
                            <p className="mt-2">After filling all the required form data, you can click the submit button to submit your application</p>
                        </div>
                    </div>
                    <div className="track-status-step  mt-8 ml-16">
                        <div className="w-2/5">
                            <h3>Step 5: <span className="text-black">Track Application</span></h3>
                            <p className="mt-2">The applicant can track their application status, but only after the closing date of applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}