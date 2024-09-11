"use client"

import React from "react"
import { getApplicationsCountByGrade, getApplicationCountBySchool, getTotalApplicationsCount } from "@/utils/lib/db-queries"


export default function AdminOverview() {

    const [totalApplications, setTotalApplications] = React.useState(null)
    const [applicationsCountByGrade, setApplicationsCountByGrade] = React.useState([])
    const [applicationCountBySchools, setApplicationCountBySchool] = React.useState([])

    React.useEffect(() => {
        async function getTotalApplicationsByGrade(){
            const res = await getApplicationsCountByGrade()
            setApplicationsCountByGrade(res)
        }
        async function getApplicationsCountBySchool(){
            const res = await getApplicationCountBySchool()
            setApplicationCountBySchool(res)
        }
        async function getTotalApplications(){
            const res = await getTotalApplicationsCount()
            setTotalApplications(res[0].count)
        }
        getTotalApplicationsByGrade()
        getApplicationsCountBySchool()
        getTotalApplications()
    }, [])

    React.useEffect(() => {
        console.log("Total applications: ", totalApplications)
    }, [applicationsCountByGrade])

    const applicationsBySchools = applicationCountBySchools.length > 0 ? (applicationCountBySchools.map(ele => {
            return(
                <tr className="" key={ele.present_school}>
                    <td className="px-3 py-2">{ele.present_school}</td>
                    <td className="px-3 py-2 text-center">{ele.count}</td>
                </tr>
                )
        })
    ): (<tr><td></td></tr>)

    const applicationsByGrade = applicationsCountByGrade.length > 0 ? (applicationsCountByGrade.map(ele => {
        return (
                <tr key={ele.grade_applying_for}>
                    <td className="px-3 py-2">{ele.grade_applying_for.substring(0, 5)+" "+ele.grade_applying_for.substring(5)}</td>
                    <td className="px-3 py-2 text-center">{ele.count}</td>
                </tr>
            )
        })
    ):(<tr><td></td></tr>)

    return (
        <div>
             <div>
                <h1 className="text-2xl font-semibold">Applications / Overview</h1>
            </div>
            <div className="lg:flex">
                <div className="mt-12">
                    <div className="bg-gray-100 w-80 h-52 rounded-lg flex flex-col justify-between text-end p-12">
                        <h3 className="text-2xl text-red-900 font-semibold">Total Applications</h3>
                        <p className="text-xl">{totalApplications}</p>
                    </div>
                    <div className="bg-gray-100 p-12 mt-12">
                        <div>
                            <h3 className="text-2xl text-red-900 font-semibold">Applications by Grade/Class</h3>
                        </div>
                        <div className="mt-12">
                            <table className="applications-by-class-table">
                                <thead className="text-left">
                                    <tr className="">
                                        <th className="px-3 py-4">Class/Grade</th>
                                        <th className="px-3 py-4">No. of Applications Received</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {applicationsByGrade}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 mt-12 lg:ml-12 p-12 rounded-lg ">
                    <div>
                        <h3 className="text-2xl text-red-900 font-semibold">Applications by Schools</h3>
                    </div>
                    <div className="mt-12">
                        <table className="applications-by-school-table">
                            <thead className="text-left">
                                <tr className="">
                                    <th className="px-3 py-4">School Name</th>
                                    <th className="px-3 py-4">No. of Applications Received</th>
                                </tr>
                            </thead>
                            <tbody className="">
                               {applicationsBySchools}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
