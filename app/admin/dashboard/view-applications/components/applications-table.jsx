"use client"

import React from 'react'
import Link from 'next/link'
import { applications } from '@/utils/lib/placeholder-data'

export default function ApplicationsTable() {
    const initialApplicationData = applications.sort((obj1, obj2) => Number(obj2.learnerInfo.averageMark) - Number(obj1.learnerInfo.averageMark))
    const [applicationsData, setApplicationsData] = React.useState(initialApplicationData)
    
    let index = 0
    const applicationsList = applicationsData.map((application) => {
        index++
        return (
                <tr key={application.learnerInfo.email} className="hover:bg-gray-100">
                    <td className="p-3">{index}</td>
                    <td className="p-3">{application.learnerInfo.firstName}</td>
                    <td className="p-3">{application.learnerInfo.lastName}</td>
                    <td className="p-3">{application.learnerInfo.email}</td>
                    <td className="p-3">{application.learnerInfo.averageMark}</td>
                    <td className="p-3">{application.status}</td>
                    <td className="p-3">{application.class}</td>
                    <td className="p-3">
                        <Link href={`/admin/dashboard/view-applications/${application.learnerInfo.email}`} 
                        className="text-blue-700">View</Link>
                    </td>
                    <td className="p-3 text-blue-700" onClick={() => handleAdmission(application.learnerInfo.email, "acceptButton")}>
                        <Link href="#">{application.status === "admitted" ? "":"Accept"}</Link>
                    </td>
                    <td className="p-3 text-blue-700" onClick={() => handleAdmission(application.learnerInfo.email, "rejectButton")}>
                        <Link href="#" >{application.status === "rejected" ? "":"Reject"}</Link>
                    </td>
                </tr>
    )
    })
    function handleAdmission(email, id){
        setApplicationsData(prevState => (
            prevState.map((application) => {
                if(application.learnerInfo.email === email && id==="acceptButton"){
                    application.status="admitted"
                }else if(application.learnerInfo.email === email && id==="rejectButton"){
                    application.status="rejected"
                }
                return application
            })
        ))
    }

    return (
        <div className="mt-12">
            <table className="applications-by-school-table w-full">
                <thead className="">
                    <tr className="">
                        <th className=""></th>
                        <th className="p-4">First Name</th>
                        <th className="p-4">Last Name</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Average Mark (%)</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Class</th>
                        <th className="p-4"></th>
                        <th className="p-4"></th>
                        <th className="p-4"></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {applicationsList}
                </tbody>
            </table>
        </div>
    )
}
