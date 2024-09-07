"use client"

import React from 'react';
import ApplicantInfo from "./components/applicant-info.jsx";
import MedicalInfo from "./components/medical-info.jsx"
import MotherInfo from "./components/mother-info.jsx";
import FatherInfo from "./components/father-info.jsx";
import DocumentsUpload from "./components/documents-upload.jsx"
import { BsArrowLeft,  BsArrowRight} from 'react-icons/bs'
import { useGlobalContext } from '@/utils/context.js';
import { useRouter } from 'next/navigation.js';

export default function ApplicationForm() {

  const { user, applicationInfo, applicationStep, setApplicationStep, isLoading, setIsLoading } = useGlobalContext()

  // const [applicationStep, setApplicationStep] = React.useState(1)
  const router = useRouter()

  React.useEffect(() => {
    // console.log("Grade applying for: ", applicationInfo.learnerInfo)
    console.log("Step: ", applicationStep)
  }, [applicationStep])
 
  function handleNext(){
    setApplicationStep(prevStep => prevStep + 1)
    if(applicationStep > 5){
      setApplicationStep(5)
    }
  }
  function handlePrevious(){
    setApplicationStep(prevStep => prevStep - 1)
  }

  async function handleSubmit(event){
    event.preventDefault()
    setIsLoading(true)
    try{
      const res = await fetch("/api/apply", {
        method: "POST",
        body: JSON.stringify(applicationInfo)
      }).then(result => result.json())
      console.log(res.message)
      setIsLoading(false)
      if(res.success){
        router.push("/apply/my-status")
      }else{
        alert(res.message)
      }
    }catch(err){
      alert("Error: from handleSubmit", err)
    }
  }
  return (
    <div className='main-body min-h-screen'>
      <div className="w-full px-2 sm:w-4/5 m-auto">
        <div className="mt-12"><h1 className="text-2xl italic">You are signed in as: {user?.firstName}</h1></div>
        { applicationStep === 1 && <ApplicantInfo /> }
        { applicationStep === 2 && <MedicalInfo />}
        { applicationStep === 3 && <MotherInfo /> }
        { applicationStep === 4 && <FatherInfo /> }
        { applicationStep === 5 && <DocumentsUpload /> }
        <div className={applicationStep === 1 ? "": 'flex justify-between md:justify-around'}>
                {applicationStep > 1 &&<div className="mt-10 mb-12" onClick={handlePrevious}>
                    <button className="next-button rounded-md bg-red-900 text-white w-28 px-2 py-2 flex justify-around 
                    items-center active:text-sm">
                        <BsArrowLeft className=""/><div>Previous</div> 
                    </button>
                </div>}
                {applicationStep < 5 && (<div className="mt-10 mb-12" onClick={handleNext}>
                    <button className="next-button rounded-md bg-red-900 text-white w-28 px-2 py-2 flex justify-around 
                    items-center active:text-sm">
                        <div>Next</div> <BsArrowRight className=""/>
                    </button>
                </div>)}
                {applicationStep === 5 && ( <div className="mt-10 mb-12">
                  <button type="submit" onClick={handleSubmit} disabled={isLoading}
                    className="next-button rounded-md bg-red-900 text-white w-auto px-2 py-2 flex justify-around 
                    items-center active:text-sm">
                        {isLoading ? "Submitting...": "Submit"}
                  </button>
                  </div>)}
        </div>   
      </div>
    </div>
  )
}
