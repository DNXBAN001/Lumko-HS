"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/utils/context'

export default function GradeChooser() {

    const { applicationInfo, setApplicationInfo } = useGlobalContext()
    const [admissionsInfo, setAdmissionsInfo] = React.useState(null)
    const [gradeApplyingFor, setGradeApplyingFor] = React.useState("")

    const router = useRouter()


    function handleChange(event){
        const {value} = event.target
        setGradeApplyingFor(value)
    }
    function handleSubmit(event){
        event.preventDefault()
        if(gradeApplyingFor.grade === "8"){
            console.log("Next button clicked, grade is: ",gradeApplyingFor)
            router.push("/apply/fill-form")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-12">
                <p className="font-bold">Select the grade you are applying for below:</p>
                <div className="mt-4">
                    <input type="radio" name="grade" id="grade-8" required 
                    className='grade-input' value="8" checked={gradeApplyingFor === "8"} 
                    onChange={handleChange} />
                    <label htmlFor="grade-8" className="pl-1">Grade 8</label>
                </div>
                <div className="mt-2">
                    <input type="radio" name="grade" id="grade-9" required
                    className='grade-input' value="9" checked={gradeApplyingFor === "9"} 
                    onChange={handleChange} />
                    <label htmlFor="grade-9" className="pl-1">Grade 9</label>
                </div>
                <div className="mt-2 sm:flex">
                    <div className="flex">
                        <input type="radio" name="grade" id="grade-10A" required 
                        className='grade-input' value="10A" checked={gradeApplyingFor === "10A"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-10A" className="pl-1">Grade 10A</label>

                        <input type="radio" name="grade" id="grade-10B" required 
                        className='grade-input ml-6 sm:ml-4' value="10B" checked={gradeApplyingFor === "10B"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-10B" className="pl-1">Grade 10B</label>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                        <input type="radio" name="grade" id="grade-10C" required 
                        className='grade-input sm:ml-4' value="10C" checked={gradeApplyingFor === "10C"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-10C" className="pl-1">Grade 10C</label>

                        <input type="radio" name="grade" id="grade-10D" required 
                        className='grade-input ml-6 sm:ml-4' value="10D" checked={gradeApplyingFor === "10D"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-10D" className="pl-1">Grade 10D</label>
                    </div>
                </div>
                <div className="mt-2 sm:flex">
                    <div className="flex">
                        <input type="radio" name="grade" id="grade-11A" required
                            className='grade-input' value="11A" checked={gradeApplyingFor === "11A"} 
                            onChange={handleChange} />
                            <label htmlFor="grade-11A" className="pl-1">Grade 11A</label>

                            <input type="radio" name="grade" id="grade-11B" required
                            className='grade-input ml-7 sm:ml-5' value="11B" checked={gradeApplyingFor === "11B"} 
                            onChange={handleChange} />
                            <label htmlFor="grade-11B" className="pl-1">Grade 11B</label>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                        <input type="radio" name="grade" id="grade-11C" required
                        className='grade-input sm:ml-5' value="11C" checked={gradeApplyingFor === "11C"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-11C" className="pl-1">Grade 11C</label>

                        <input type="radio" name="grade" id="grade-11D" required
                        className='grade-input ml-7 sm:ml-5' value="11D" checked={gradeApplyingFor === "11D"} 
                        onChange={handleChange} />
                        <label htmlFor="grade-11D" className="pl-1">Grade 11D</label>
                    </div>
                </div>
                {gradeApplyingFor.grade !== "8" && gradeApplyingFor.grade !== "" ? 
                (<p aria-live="polite" className="notAllowed-message not-sr-only font-bold bg-red-400 mt-8 w-auto md:w-2/5 ">
                    Sorry, our school is currently not accepting any Grade {gradeApplyingFor} applications
                </p>): <p></p>}
            </div>
            <div className="next-button my-12">
                <button type="submit" className="bg-red-900 text-white px-12 py-2 active:text-sm rounded-md">Next</button>
            </div>
        </form>
    )
}
