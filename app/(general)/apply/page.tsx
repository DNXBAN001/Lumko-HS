"use client"

import React from 'react'
import Image from "next/image"
// import { allowApplication } from './actions'
// import { useFormStatus, useFormState } from 'react-dom'
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


const initialState = {
    message: ""
  }

export default function ApplyPage() {

    const [gradeApplyingFor, setGradeApplyingFor] = React.useState({
        grade: "",
    })
    const router = useRouter()

    function handleChange(event: any){
        const {name, type, value, checked} = event.target
        setGradeApplyingFor(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked: value
        }
        ))
    }
    function handleSubmit(event: any){
        event.preventDefault()
        if(gradeApplyingFor.grade === "8"){
            console.log("Next button clicked, grade is: ",gradeApplyingFor.grade)
            router.push("/apply/fill-form")
        }
    }

    return (
        <div className='main-body'> 
            <div className="apply-wrapper mt-12 w-4/5 m-auto flex">
                <div>
                    <Image src="/logo-large.png" width={100} height={100} alt="logo-img" />
                </div>
                <div className="ml-12">
                    <h1 className="text-3xl">Lumko High School</h1>
                </div>
            </div>
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
                <form onSubmit={handleSubmit}>
                    <div className="mt-12">
                        <p className="font-bold">Select the grade you are applying for below:</p>
                        <div className="mt-4">
                            <input type="radio" name="grade" id="grade-8" required 
                            className='grade-input' value="8" checked={gradeApplyingFor.grade === "8"} onChange={handleChange}
                            />
                            <label htmlFor="grade-8" className="ml-2">Grade 8</label>
                        </div>
                        <div className="mt-2">
                            <input type="radio" name="grade" id="grade-9" required
                            className='grade-input' value="9" checked={gradeApplyingFor.grade === "9"} onChange={handleChange}
                            />
                            <label htmlFor="grade-9" className="ml-2">Grade 9</label>
                        </div>
                        <div className="mt-2">
                            <input type="radio" name="grade" id="grade-10" required 
                            className='grade-input' value="10" checked={gradeApplyingFor.grade === "10"} onChange={handleChange}
                            />
                            <label htmlFor="grade-10" className="ml-2">Grade 10</label>
                        </div>
                        <div className="mt-2">
                            <input type="radio" name="grade" id="grade-11" required
                            className='grade-input' value="11" checked={gradeApplyingFor.grade === "11"} onChange={handleChange}
                            />
                            <label htmlFor="grade-11" className="ml-2">Grade 11</label>
                        </div>
                        {gradeApplyingFor.grade !== "8" && gradeApplyingFor.grade !== "" ? 
                        (<p aria-live="polite" className="notAllowed-message not-sr-only font-bold bg-red-400 mt-8 w-auto md:w-2/5 ">
                            Sorry, our school is currently not accepting any Grade {gradeApplyingFor.grade} applications
                        </p>): <p></p>}
                    </div>
                    <div className="next-button my-12">
                        <button type="submit" className="bg-red-900 text-white px-12 py-2 active">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
// const [state, formAction] = useFormState(allowApplication, initialState)
// <p aria-live="polite" className="not-sr-only">{state?.message}</p>
