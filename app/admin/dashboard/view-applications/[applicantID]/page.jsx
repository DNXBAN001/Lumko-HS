"use client"
import React from "react"
import { useParams } from "next/navigation"
import ApplicantInfo from "./components/applicant-info.jsx"
import MedicalInfo from "./components/medical-info.jsx"
import MotherInfo from "./components/mother-info.jsx";
import FatherInfo from "./components/father-info.jsx";

export default function ViewApplication() {

    const {applicantID} = useParams()
    
    const applicantId = decodeURIComponent(applicantID)

    React.useEffect(() => {
        
    }, [])
    

    return (
        <div>
            Application Information for {/*newEmail*/}
            <ApplicantInfo applicantID={applicantId}/>
            <MedicalInfo applicantID={applicantId} />
            <MotherInfo applicantID={applicantId}/>
            <FatherInfo applicantID={applicantId}/>
            <div className="mt-12 w-full">
                <iframe src={supportingDocuments?.motherId} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-12 w-full">
                <iframe src={supportingDocuments?.motherId} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-12 w-full">
                <iframe src={supportingDocuments?.motherId} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-12 w-full">
                <iframe src={supportingDocuments?.motherId} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-12 w-full">
                <img src={supportingDocuments?.motherId} className="w-3/5 h-80 lg:h-screen" />
            </div>
        </div>
    )
}
