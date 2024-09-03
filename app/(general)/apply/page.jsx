import React from 'react'
import Image from "next/image";
import GradeChooser from "./components/grade-chooser";
import { getSession } from '@/utils/lib/session';
import Link from "next/link";
import { applicationExist } from "@/utils/lib/db-queries";
import { redirect } from 'next/navigation';

export default async function ApplyPage() {

    const user = await getSession()
    if(!user){
        return (<h1 className="mt-12 text-center min-h-screen">
                Not authorized to access this page...<Link href="/sign-in" className="text-blue-500">Try login</Link>
                </h1>
            )
    }
    // console.log(user)
    const isApllicationExist = await applicationExist(user.userId)
    console.log("Application exists? ", isApllicationExist)
    if(isApllicationExist){
        redirect("/apply/my-status")
    }
    
    return (
        <div className='main-body min-h-screen'> 
            <div className="apply-wrapper mt-12 w-4/5 m-auto flex">
                <div>
                    <Image src="/logo-large.png" width={100} height={100} alt="logo-img" />
                </div>
                <div className="ml-12">
                    <h1 className="text-3xl font-semibold">Lumko High School</h1>
                </div>
            </div>
            <div className="mt-12 w-4/5 m-auto"><h1 className="text-2xl italic">You are signed in as: {user?.firstName}</h1></div>
            <div className="apply-wrapper mt-12 w-4/5 m-auto">
                <p>Before you click on the Next button, make sure you have the following documents on your computer<br/>
                     or mobile phone:</p>
                <ol className="mt-8 ml-12 list-decimal ">
                    <li>Certified copy of a learner's birth certificate</li>
                    <li>Certified copies of both parents</li>
                    <li>June report</li>
                    <li>proof of residence</li>
                    <li>Learner face photo (half card)</li>
                </ol>
                <p className="mt-12">Also, it is important to note that any Information provided in this application 
                    which is found<br/> to be false or incorrect, may lead to the cancellation of the application</p>
                <GradeChooser />
            </div>
        </div>
    )
}
