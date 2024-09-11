"use client"

import React from 'react';
import Link from 'next/link'
import { getApplicationsByClass, getApplicationsByClassAndStatus, updateAdmissionStatus } from '@/utils/lib/db-queries';
import SelectClass from "./select-class"

export default function ViewApplications() {

    const [filterBy, setFilterBy] = React.useState({
        grade: "grade8",
        status: "pending"
    })
    const [applications, setApplications] = React.useState([])
    const [decision, setDecision] = React.useState({
        admissionStatus: "",
        allocatedClass: "",
        applicationId: ""
    })

    React.useEffect(() => {
        console.log("Admission status changed to: ", decision.admissionStatus)
        async function handleAdmission(){
            await updateAdmissionStatus(decision.applicationId, decision.admissionStatus)
        }
        handleAdmission()
    }, [decision.admissionStatus])

    React.useEffect(() =>{
        async function fetchApplicationsByGradeAndStatus(){
            const res = await getApplicationsByClassAndStatus(filterBy.grade, filterBy.status)
            setApplications(res)
        }
        fetchApplicationsByGradeAndStatus()
    }, [filterBy])

    function handleChange(event){
        const {name, value} = event.target
        setFilterBy(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleAdmission(applicantId, buttonTask){
        setApplications(prevState => (
            prevState.map((application) => {
                if(application.userid === applicantId && buttonTask==="acceptButton"){
                    application.status="admitted"
                    setDecision(prevState => ({
                        ...prevState,
                        admissionStatus: "admitted",
                        applicationId: application.userid
                    }))
                }else if(application.userid === applicantId && buttonTask==="rejectButton"){
                    application.status="rejected"
                    setDecision(prevState => ({
                        ...prevState,
                        admissionStatus: "rejected",
                        applicationId: application.userid
                    }))
                }
                return application
            })
        ))
    }


    let index = 0
    const filteredApplications = applications.length > 0 ? (applications?.map((application) => {
        index++
        return (
                <tr key={application.userid} className="hover:bg-gray-100">
                    <td className="p-3">{index}</td>
                    <td className="p-3">{application.firstname}</td>
                    <td className="p-3">{application.lastname}</td>
                    <td className="p-3">{application.email}</td>
                    <td className="p-3">{application.average_mark}</td>
                    <td className="p-3">{application.status}</td>
                    <td className="p-3">{<SelectClass applicantId={application.userid} grade={filterBy.grade} 
                        allocatedClass={application.class}/>}
                    </td>
                    <td className="p-3">{JSON.stringify(application.created_at).substring(1, 11)}</td>
                    <td className="p-3">
                        <Link href={`/admin/dashboard/view-applications/${application?.userid}`} 
                        className="text-blue-700">View</Link>
                    </td>
                    <td className="p-3 text-blue-700" onClick={() => handleAdmission(application?.userid, "acceptButton")}>
                        <Link href="#">{application?.status === "admitted" ? "":"Accept"}</Link>
                    </td>
                    <td className="p-3 text-blue-700" onClick={() => handleAdmission(application?.userid, "rejectButton")}>
                        <Link href="#" >{application?.status === "rejected" ? "":"Reject"}</Link>
                    </td>
                </tr>
            )
        })
    ): (<tr><td></td></tr>)

    return (
        <>
            <div className="mt-12 lg:flex lg:justify-between">
                <div className="">
                    <p className="font-semibold">View applications by grade</p>
                    <div className="mt-6 flex w-96 lg:w-auto">
                        <div className="">
                            <input type="radio" name="grade" id="grade_8"
                            value="grade8" onChange={handleChange} checked={filterBy.grade === "grade8"}/>
                            <label htmlFor="grade_8" className="pl-1">Grade 8</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_9"
                            value="grade9" onChange={handleChange} checked={filterBy.grade === "grade9"} />
                            <label htmlFor="grade_9" className="pl-1">Grade 9</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_10"
                            value="grade10" onChange={handleChange} checked={filterBy.grade === "grade10"} />
                            <label htmlFor="grade_10" className="pl-1">Grade 10</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_11"
                            value="grade11" onChange={handleChange} checked={filterBy.grade === "grade11"} />
                            <label htmlFor="grade_11" className="pl-1">Grade 11</label>
                        </div>
                     </div>
                </div>
                <div className="">
                    <p className="mt-12 lg:mt-0 font-semibold">Filter by status</p>
                    <div className="mt-6 flex w-96 lg:w-auto">
                        <div className="">
                            <input type="radio" name="status" id="pending"
                            value="pending" onChange={handleChange} checked={filterBy.status === "pending"} />
                            <label htmlFor="pending" className="pl-1">Pending</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="status" id="admitted"
                            value="admitted" onChange={handleChange} checked={filterBy.status === "admitted"} />
                            <label htmlFor="admitted" className="pl-1">Admitted</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="status" id="rejected"
                            value="rejected" onChange={handleChange} checked={filterBy.status === "rejected"} />
                            <label htmlFor="rejected" className="pl-1">Rejected</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <table className="w-full">
                    <thead className="">
                        <tr className="">
                            <th className=""></th>
                            <th className="p-4">First Name</th>
                            <th className="p-4">Last Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Average Mark (%)</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Class</th>
                            <th className="p-4">Submitted</th>
                            <th className="p-4"></th>
                            <th className="p-4"></th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredApplications}
                    </tbody>
                </table>
                {applications.length === 0 && (<p className="p-3 w-full text-center hover:bg-gray-100">
                        No applications found
                    </p>)}
            </div>
        </>
    )
}
