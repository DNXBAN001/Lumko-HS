import Image from "next/image";
import Link from "next/link";

export default function Admissions() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-4-reduced.jpg"
                    width={1910}
                    height={600}
                    priority={true}
                    alt="banner-image"
                />
            </div>
            <div className="admissions-container w-4/5 m-auto mt-12 mb-16">
                <h1 className="text-3xl text-center">Application Information</h1>
                <div className="application-info mt-12">
                    <h3>How to apply?</h3>
                    <div>
                        <div>
                            <h3>Step 1: <span className="text-blue-700"><Link href="/sign-up">Create Account</Link></span></h3>
                            <p>Applicant needs to have an account in order to proceed with the application process.
                                If you do not have an existing account: Click 
                                <span className="text-blue-700 underline"><Link href="/sign-up"> here </Link></span>to create one
                            </p>
                        </div>
                        <div>
                            <h3>Step 2: <span className="text-blue-700"><Link href="/sign-up">Sign in</Link></span></h3>
                            <p>After signing up for an account you can then login to start with the application.
                                If you already have an account, 
                                <span className="text-blue-700"><Link href="/sign-in"> sign-in here </Link></span>
                                to start your application
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}