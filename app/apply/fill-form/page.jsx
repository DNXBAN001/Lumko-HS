"use client"

import React from 'react';
import Applicantinfo from "./components/applicant-info.jsx";
import ParentsInfo from "./components/parents-info.jsx";
import { BsArrowLeft,  BsArrowRight} from 'react-icons/bs'

export default function ApplicationForm() {

  const user = {
    firstName: "Bandile",
    lastName: "Danxa",
    userRole: "applicant"
  }

  const [step, setStep] = React.useState(1)


  React.useEffect(() => {
    console.log(step)
  }, [step])
 
  function handleNext(){
    setStep(prevStep => prevStep + 1)
  }
  function handlePrevious(){
    setStep(prevStep => prevStep - 1)
  }

  return (
    <div className='main-body min-h-screen'>
      <div className="w-full px-2 sm:w-4/5 m-auto">
        <div className="mt-12"><h1 className="text-3xl">You are signed in as: {user.firstName}</h1></div>
        {
          step === 1 ? (<Applicantinfo />):
          (<ParentsInfo />)
        }
        <div className={step === 1 ? "": 'flex justify-between md:justify-around'}>
                {step > 1 &&<div className="mt-10 mb-12" onClick={handlePrevious}>
                    <button className="next-button bg-red-700 text-white w-28 px-2 py-2 flex justify-around items-center active">
                        <BsArrowLeft className=""/><div>Previous</div> 
                    </button>
                </div>}
                <div className="mt-10 mb-12" onClick={handleNext}>
                    <button className="next-button bg-red-700 text-white w-28 px-2 py-2 flex justify-around items-center active">
                        <div>Next</div> <BsArrowRight className=""/>
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}
