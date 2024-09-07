"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/utils/context'
import { getAdmissionDates, getAdmissionByClass } from '@/utils/lib/db-queries'

export default function GradeChooser() {

    const { gradeApplyingFor, setGradeApplyingFor } = useGlobalContext()
    const [admissionDates, setAdmissionDates] = React.useState()
    const [classAdmissions, setClassAdmissions] = React.useState([])
    const [classAdmissionInfo, setClassAdmissionInfo] = React.useState()
    const [applicationNotAllowed, setApplicationNotAllowed] = React.useState(true)

    const router = useRouter()

    React.useEffect(() => {
        async function getClassAdmissionInfo(){
            const classAdmissions = await getAdmissionByClass()
            setClassAdmissions(classAdmissions)
        }
        async function getAdmissionDatesInfo(){
            const classAdmissions = await getAdmissionDates()
            setAdmissionDates(classAdmissions)
        }
        getClassAdmissionInfo()
        getAdmissionDatesInfo()
    }, [])
    React.useEffect(() => {
        setClassAdmissionInfo({
            grade8: { class_grade: "grade8", max_intake: classAdmissions[0]?.max_intake, 
                total_classes: classAdmissions[0]?.total_classes,
            },
            grade9: { class_grade: "grade9", max_intake: classAdmissions[1]?.max_intake, 
                total_classes: classAdmissions[1]?.total_classes,
            },
            grade10A: { class_grade: "grade10A", max_intake: classAdmissions[2]?.max_intake },
            grade10B: { class_grade: "grade10B", max_intake: classAdmissions[3]?.max_intake },
            grade10C: { class_grade: "grade10C", max_intake: classAdmissions[4]?.max_intake },
            grade10D: { class_grade: "grade10D", max_intake: classAdmissions[5]?.max_intake },
            grade11A: { class_grade: "grade11B", max_intake: classAdmissions[6]?.max_intake },
            grade11B: { class_grade: "grade11B", max_intake: classAdmissions[7]?.max_intake },
            grade11C: { class_grade: "grade11C", max_intake: classAdmissions[8]?.max_intake },
            grade11D: { class_grade: "grade11D", max_intake: classAdmissions[9]?.max_intake },
        })
    }, [classAdmissions])

    React.useEffect(() => {
        // console.log(admissionDates)
        // console.log(classAdmissionInfo)
        // console.log(admissionDates?.is_applications_open==="no")
        // console.log(classAdmissionInfo?.[gradeApplyingFor].max_intake === 0)
        if(admissionDates?.is_applications_open==="no" || classAdmissionInfo?.[gradeApplyingFor].max_intake === 0){
            setApplicationNotAllowed(true)
        }else{
            setApplicationNotAllowed(false)
        }
    }, [gradeApplyingFor])

    React.useEffect(() => {
        console.log(applicationNotAllowed)
    },[applicationNotAllowed])

    function handleChange(event){
        const {value} = event.target
        setGradeApplyingFor(value)
    }
    function handleNext(event){
        event.preventDefault()
        if(applicationNotAllowed){
            alert("Sorry, you are not allowed to proceed with the application!")
        }else{
            console.log("Next button clicked, grade selected: ",gradeApplyingFor)
            router.push("/apply/fill-form")
        }
    }

    return (
        <div className="">
            <div className="mt-12">
                <p className="font-bold">Select the grade you are applying for below:</p>
                <div className="mt-4">
                    <input type="radio" name="grade" id="grade8" required 
                    className='grade-input' value="grade8" checked={gradeApplyingFor === "grade8"} 
                    onChange={handleChange} />
                    <label htmlFor="grade8" className="pl-1">Grade 8</label>
                </div>
                <div className="mt-2">
                    <input type="radio" name="grade" id="grade9" required
                    className='grade-input' value="grade9" checked={gradeApplyingFor === "grade9"} 
                    onChange={handleChange} />
                    <label htmlFor="grade9" className="pl-1">Grade 9</label>
                </div>
                <div className="mt-2 sm:flex">
                    <div className="flex">
                        <input type="radio" name="grade" id="grade10A" required 
                        className='grade-input' value="grade10A" checked={gradeApplyingFor === "grade10A"} 
                        onChange={handleChange} />
                        <label htmlFor="grade10A" className="pl-1">Grade 10A</label>

                        <input type="radio" name="grade" id="grade10B" required 
                        className='grade-input ml-6 sm:ml-4' value="grade10B" checked={gradeApplyingFor === "grade10B"} 
                        onChange={handleChange} />
                        <label htmlFor="grade10B" className="pl-1">Grade 10B</label>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                        <input type="radio" name="grade" id="grade10C" required 
                        className='grade-input sm:ml-4' value="grade10C" checked={gradeApplyingFor === "grade10C"} 
                        onChange={handleChange} />
                        <label htmlFor="grade10C" className="pl-1">Grade 10C</label>

                        <input type="radio" name="grade" id="grade10D" required 
                        className='grade-input ml-6 sm:ml-4' value="grade10D" checked={gradeApplyingFor === "grade10D"} 
                        onChange={handleChange} />
                        <label htmlFor="grade10D" className="pl-1">Grade 10D</label>
                    </div>
                </div>
                <div className="mt-2 sm:flex">
                    <div className="flex">
                        <input type="radio" name="grade" id="grade11A" required
                            className='grade-input' value="grade11A" checked={gradeApplyingFor === "grade11A"} 
                            onChange={handleChange} />
                            <label htmlFor="grade11A" className="pl-1">Grade 11A</label>

                            <input type="radio" name="grade" id="grade11B" required
                            className='grade-input ml-7 sm:ml-5' value="grade11B" checked={gradeApplyingFor === "grade11B"} 
                            onChange={handleChange} />
                            <label htmlFor="grade11B" className="pl-1">Grade 11B</label>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                        <input type="radio" name="grade" id="grade11C" required
                        className='grade-input sm:ml-5' value="grade11C" checked={gradeApplyingFor === "grade11C"} 
                        onChange={handleChange} />
                        <label htmlFor="grade11C" className="pl-1">Grade 11C</label>

                        <input type="radio" name="grade" id="grade11D" required
                        className='grade-input ml-7 sm:ml-5' value="grade11D" checked={gradeApplyingFor === "grade11D"} 
                        onChange={handleChange} />
                        <label htmlFor="grade11D" className="pl-1">Grade 11D</label>
                    </div>
                </div>
                {applicationNotAllowed ? 
                (<p aria-live="polite" className="notAllowed-message not-sr-only font-bold bg-red-400 mt-8 w-auto md:w-2/5 ">
                    Sorry, our school is currently not accepting any applications for the selected grade
                </p>): <p></p>}
            </div>
            <div className="next-button my-12">
                <button type="submit" onClick={handleNext} className="bg-red-900 text-white px-12 py-2 active:text-sm rounded-md">Next</button>
            </div>
        </div>
    )
}
