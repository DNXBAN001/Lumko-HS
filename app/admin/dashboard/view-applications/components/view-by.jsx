"use client"

import React from 'react';
import ApplicationsTable from "./applications-table";

export default function ViewBy() {

    const [filterBy, setFilterBy] = React.useState({
        grade: "8",
        status: ""
    })
    const [applications, setApplications] = React.useState(null)

    React.useEffect(() => {
        // async function fetchApplications(){
        //     const res = await fetch("/api/admin/view-by", {
        //         method: "GET"
        //     }).then(res => res.json())
        //       setApplications(res.data)
        // }
        // fetchApplications()
        console.log("Filter grade changed to: ", filterBy.grade)
    }, [filterBy.grade])
    React.useEffect(() => {
        console.log("Filter status changed to: ", filterBy.status)
        // const filteredByStatus = applications.filter(application => application.status === filterBy.status)
        // setApplications(filteredByStatus)
    }, [filterBy.status])

    function handleChange(event){
        const {name, value} = event.target
        setFilterBy(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <div className="mt-12 lg:flex lg:justify-between">
                <div className="">
                    <p className="font-semibold">View applications by grade</p>
                    <div className="mt-6 flex w-96 lg:w-auto">
                        <div className="">
                            <input type="radio" name="grade" id="grade_8"
                            value="8" onChange={handleChange} checked={filterBy.grade === "8"}/>
                            <label htmlFor="grade_8" className="pl-1">Grade 8</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_9"
                            value="9" onChange={handleChange} checked={filterBy.grade === "9"} />
                            <label htmlFor="grade_9" className="pl-1">Grade 9</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_10"
                            value="10" onChange={handleChange} checked={filterBy.grade === "10"} />
                            <label htmlFor="grade_10" className="pl-1">Grade 10</label>
                        </div>
                        <div className="ml-6">
                            <input type="radio" name="grade" id="grade_11"
                            value="11" onChange={handleChange} checked={filterBy.grade === "11"} />
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
            <ApplicationsTable applications={applications}/>
        </>
    )
}
