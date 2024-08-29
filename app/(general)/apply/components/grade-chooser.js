"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function GradeChooser() {

    const [gradeApplyingFor, setGradeApplyingFor] = React.useState({
        grade: "",
    })

    const router = useRouter()

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setGradeApplyingFor(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked: value
        }
        ))
    }
    function handleSubmit(event){
        event.preventDefault()
        if(gradeApplyingFor.grade === "8"){
            console.log("Next button clicked, grade is: ",gradeApplyingFor.grade)
            router.push("/apply/fill-form")
        }
    }

    return (
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
                <button type="submit" className="bg-red-900 text-white px-12 py-2 active rounded-md">Next</button>
            </div>
        </form>
    )
}
