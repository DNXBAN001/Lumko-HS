// "use client"

import React from 'react'
import Image from "next/image"
import { allowApplication } from './actions'


export default function ApplyPage() {

    // const [state, formAction] = React.useActionState(allowApplication, initialState)
    
    // console.log(state)

    return (
        <div className='main-body'> 
            <div className="mt-12 w-4/5 m-auto flex">
                <div>
                    <Image src="/logo-large.png" width={100} height={100} alt="logo-img" />
                </div>
                <div className="ml-12">
                    <h1 className="text-3xl">Lumko High School</h1>
                </div>
            </div>
            <div className='mt-12 w-4/5 m-auto'>
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
                <form action={allowApplication}><div className="mt-12">
                    <p>Select the grade you are applying for below:</p>
                    <div className="mt-4">
                        <input type="radio" name="grade" id="grade-8" required
                        className='grade-input' value="8"
                        />
                        <label htmlFor="grade-8">Grade 8</label>
                    </div>
                    <div>
                        <input type="radio" name="grade" id="grade-9" required
                        className='grade-input' value="9"
                        />
                        <label htmlFor="grade-9">Grade 9</label>
                    </div>
                    <div>
                        <input type="radio" name="grade" id="grade-10" required
                        className='grade-input' value="10"
                        />
                        <label htmlFor="grade-10">Grade 10</label>
                    </div>
                    <div>
                        <input type="radio" name="grade" id="grade-11" required
                        className='grade-input' value="11"
                        />
                        <label htmlFor="grade-11">Grade 11</label>
                    </div>
                </div>
                <div className="my-12">
                    <button type="submit" className="bg-red-800 text-white px-12 py-2">Next</button>
                </div>
                </form>
            </div>
        </div>
    )
}
