import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";



async function getApplicationDates(){
    "use server"
    const { rows } = await sql`SELECT opening_date, closing_date FROM admission_dates`

    return rows[0]
}

export default async function Admissions() {

    const applicationDates = await getApplicationDates()
    
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
                        <p>Applications for Grade 8 2026 open on <span className="font-semibold italic">
                            {applicationDates.opening_date} </span>
                            and the closing date is <span className="font-semibold italic">
                                {applicationDates.closing_date}</span>
                        </p>
                    </div>
                    <h3 className="how-to-apply text-xl mt-12 ml-16">How to apply?</h3>
                    <div className="steps-wrapper mt-10 flex justify-around pl-1">
                        <div className="step-wrapper w-2/5">
                            <h3>Step 1: <Link href="/sign-up" className="text-blue-700">Create Account</Link></h3>
                            <p className="mt-2">Applicant needs to have an account in order to proceed with the application process.
                                If you do not have an existing account: Click 
                                <Link href="/sign-up" className="text-blue-700 underline"> here </Link>to create one
                            </p>
                        </div>
                        <div className="step-wrapper step-wrapper-even w-2/5">
                            <h3>Step 2: <Link href="/sign-in" className="text-blue-700">Sign in</Link></h3>
                            <p className="mt-2">After signing up for an account you can then login to start with the application.
                                If you already have an account, 
                                <Link href="/sign-in" className="text-blue-700"> sign-in here </Link>
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
                            <h3>Step 4: <span className="text-black">Upload Supporting Documents</span></h3>
                            <p className="mt-2">The final step of filling the application form will require you to attach 
                                some documents that will accompany your application (<span className="italic">See the list of 
                                required documents on the /apply page</span>)
                            </p>
                        </div>
                    </div>
                    <div className="track-status-step  mt-8  flex justify-around pl-1 ">
                        <div className="step-wrapper step-wrapper-even w-2/5">
                            <h3>Step 5: <span className="text-black">Submit Application Form</span></h3>
                            <p className="mt-2">After filling all the required form data, you can click 
                                the submit button to submit your application
                            </p>
                        </div>
                        <div className="w-2/5">
                            <h3>Step 6: <span className="text-black">Track Application</span></h3>
                            <p className="mt-2">The applicant can track their application status, but 
                                admissions are only going to be made after the closing date of applications
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}