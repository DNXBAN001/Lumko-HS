"use client"
import React from "react"
import { useParams } from "next/navigation"
import ApplicantInfo from "./components/applicant-info.jsx"
import MedicalInfo from "./components/medical-info.jsx"
import MotherInfo from "./components/mother-info.jsx";
import FatherInfo from "./components/father-info.jsx";
import { getSupportingDocs } from "@/utils/lib/db-queries.ts"

export default function ViewApplication() {

    const {applicantID} = useParams()
    
    const applicantId = decodeURIComponent(applicantID)

    const [supportingDocuments, setSupportingDocuments] = React.useState([])

    React.useEffect(() => {
        async function getDocs(){
            const res = await getSupportingDocs(applicantID)
            setSupportingDocuments(res)
        }
        getDocs()
    }, [])
    

    return (
        <div>
            Application Information for {/*newEmail*/}
            <ApplicantInfo applicantID={applicantId}/>
            <MedicalInfo applicantID={applicantId} />
            <MotherInfo applicantID={applicantId}/>
            <FatherInfo applicantID={applicantId}/>
            <div className="mt-12 w-full">
                <iframe src={supportingDocuments[0]?.learner_birth_certificate} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-4 w-full">
                <iframe src={supportingDocuments[0]?.mother_id} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-4 w-full">
                <iframe src={supportingDocuments[0]?.latest_report} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-4 w-full">
                <iframe src={supportingDocuments[0]?.proof_of_residence} className="w-full h-80 lg:h-screen" ></iframe>
            </div>
            <div className="mt-4 w-4/5 m-auto">
                <img src={supportingDocuments[0]?.learner_face_photo} className="w-full h-80 lg:h-screen" />
            </div>
        </div>
    )
}
