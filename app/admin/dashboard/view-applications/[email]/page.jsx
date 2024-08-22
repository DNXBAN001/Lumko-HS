"use client"
import React from "react"
import { useParams } from "next/navigation"
import ApplicantInfo from "./components/applicant-info.jsx"
import MedicalInfo from "./components/medical-info.jsx"
import MotherInfo from "./components/mother-info.jsx";
import FatherInfo from "./components/father-info.jsx";
import { applications } from "@/utils/lib/placeholder-data.js"

export default function ViewApplication() {

    const {email} = useParams()
    
    const newEmail = decodeURIComponent(email)
    const application = applications.filter(application => application.learnerInfo.email === newEmail)[0]
    

    const {firstName, lastName, idNumber, dateOfBirth, phone, 
        presentSchool, previousSchools, yearOfPreviousSchools, 
        homeLanguage, religion, physicalAddress, sportsOrCulturalHighlights} = application.learnerInfo
    const {medicalAidNumber, medicalAidName, medicalAidMainMember,
        nameOfDoctor, doctorContactNumber, medicalCondition, specialProblems} = application.medicalInfo
    const {title, firstName: motherFirstName, lastName: motherLastName, idNumber: motherIdNumber, maritalStatus, email: motherEmail,
        phone: motherPhone, occupation, employer, physicalAddress: motherPhysicalAddress, 
        postalAddress: motherPostalAddress} = application.motherInfo
    const {title: fatherTitle, firstName: fatherFirstName, lastName: fatherLastName, idNumber: fatherIdNumber, 
        maritalStatus: fatherMaritalStatus, email: fatherEmail, phone: fatherPhone, occupation: fatherOccupation, 
        employer: fatherEmployer, physicalAddress: fatherPhysicalAddress, postalAddress: fatherPostalAddress} = application.fatherInfo
    return (
        <div>
            Application Information for {newEmail}
            <ApplicantInfo firstName={firstName} lastName={lastName} idNumber={idNumber} dateOfBirth={dateOfBirth} 
                email={newEmail} phone={phone} presentSchool={presentSchool} previousSchools={previousSchools}
                yearOfPreviousSchools={yearOfPreviousSchools} homeLanguage={homeLanguage} religion={religion}
                physicalAddress={physicalAddress} sportsOrCulturalHighlight={sportsOrCulturalHighlights}/>
            <MedicalInfo medicalAidNumber={medicalAidNumber} medicalAidName={medicalAidName} 
                medicalAidMainMember={medicalAidMainMember} nameOfDoctor={nameOfDoctor} 
                doctorContactNumber={doctorContactNumber} medicalCondition={medicalCondition} specialProblems={specialProblems} />
            <MotherInfo title={title} firstName={motherFirstName} lastName={motherLastName} idNumber={motherIdNumber} 
                maritalStatus={maritalStatus} email={motherEmail} phone={motherPhone} occupation={occupation} 
                employer={employer} physicalAddress={motherPhysicalAddress} postalAddress={motherPostalAddress}/>
            <FatherInfo title={fatherTitle} firstName={fatherFirstName} lastName={fatherLastName} idNumber={fatherIdNumber} 
                maritalStatus={fatherMaritalStatus} email={fatherEmail} phone={fatherPhone} occupation={fatherOccupation} 
                employer={fatherEmployer} physicalAddress={fatherPhysicalAddress} postalAddress={fatherPostalAddress}/>
        </div>
    )
}
