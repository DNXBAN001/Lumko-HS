import React from 'react'
import Applicantinfo from "./components/applicant-info.jsx"

export default function ApplicationForm() {

  const user = {
    firstName: "Bandile",
    lastName: "Danxa",
    userRole: "applicant"
  }
 
  
  return (
    <div className='main-body min-h-screen'>
      <div className="w-4/5 m-auto">
        <div className="mt-12"><h1 className="text-3xl">You are signed in as: {user.firstName}</h1></div>
        <Applicantinfo />
      </div>
    </div>
  )
}
