"use client"

import React from 'react';
import { updateClassAllocatedToApplicant } from '@/utils/lib/db-queries';

export default function SelectClass(props) {
    const [grade, setGrade] = React.useState(props.grade)
    const [allocatedClass, setAllocatedClass] = React.useState(props.allocatedClass)
    const [applicantId, setApplicantId] = React.useState(props.applicantId)

    React.useEffect(() => {
        async function updateClassAllocation(){
            await updateClassAllocatedToApplicant(applicantId, allocatedClass)
        }
        updateClassAllocation()
    }, [allocatedClass])

    function handleChange(event){
        const { value } = event.target
        setAllocatedClass(value)
    }
    return (
        <div className="select-class">
            <select 
                id="allocatedClass"
                value={allocatedClass}
                onChange={handleChange}
                name="allocatedClass"
                className="bg-gray-100 w-full px-3 py-1"
                >
                <option value="">--class--</option>
                <option value={grade === "grade8" ? "8A": "9A"}>{grade === "grade8" ? "8A": "9A"}</option>
                <option value={grade === "grade8" ? "8B": "9B"}>{grade === "grade8" ? "8B": "9B"}</option>
                <option value={grade === "grade8" ? "8C": "9C"}>{grade === "grade8" ? "8C": "9C"}</option>
                <option value={grade === "grade8" ? "8D": "9D"}>{grade === "grade8" ? "8D": "9D"}</option>
                <option value={grade === "grade8" ? "8E": "9E"}>{grade === "grade8" ? "8E": "9E"}</option>
                <option value={grade === "grade8" ? "8F": "9F"}>{grade === "grade8" ? "8F": "9F"}</option>
            </select>
        </div>
    )
}
