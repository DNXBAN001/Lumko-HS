"use client"

import React from 'react';
import ApplicantInfo from "./components/applicant-info.jsx";
import MedicalInfo from "./components/medical-info.jsx"
import MotherInfo from "./components/mother-info.jsx";
import FatherInfo from "./components/father-info.jsx";
import DocumentsUpload from "./components/documents-upload.jsx"
import ReviewApplication from "./components/review-application.jsx"
import { BsArrowLeft,  BsArrowRight} from 'react-icons/bs'
import { useGlobalContext } from '@/utils/context.js';
import { useRouter } from 'next/navigation.js';

export default function ApplicationForm() {

  const { user, applicationInfo, applicationStep, setApplicationStep, isLoading, setIsLoading } = useGlobalContext()

  const router = useRouter()

  React.useEffect(() => {
    console.log("Step: ", applicationStep)
    console.log(applicationInfo)
  }, [applicationStep])
 
  function handleNext(){
    setApplicationStep(prevStep => prevStep + 1)
    // if(applicationStep > 5){
    //   setApplicationStep(5)
    // }
  }
  function handlePrevious(){
    setApplicationStep(prevStep => prevStep - 1)
  }

  async function handleSubmit(event){
    event.preventDefault()
    setIsLoading(true)
    if(!applicationInfo.documents){
      alert("Ensure that you attach all the required documents")
    }
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
      alert("Unexpected error: ", err)
    }
  }
  return (
    <div className='main-body min-h-screen'>
      <div className="w-full px-2 sm:w-4/5 m-auto">
        <div className="mt-12 flex">
          <p className={`italic w-16 rounded-full p-1 ${applicationStep > 1 ? 'text-green-600': ''} `}>
            Step 1</p>
          <p className={`italic w-16 rounded-full p-1 ${applicationStep > 2 ? 'text-green-600': ''} `}>
            Step 2</p>
          <p className={`italic w-16 rounded-full p-1 ${applicationStep > 3 ? 'text-green-600': ''} `}>
            Step 3</p>
          <p className={`italic w-16 rounded-full p-1 ${applicationStep > 4 ? 'text-green-600': ''} `}>
            Step 4</p>
          <p className={`italic w-16 rounded-full p-1 ${applicationStep > 5 ? 'text-green-600': ''} `}>
            Step 5</p>
        </div>
        { applicationStep === 1 && <ApplicantInfo /> }
        { applicationStep === 2 && <MedicalInfo />}
        { applicationStep === 3 && <MotherInfo /> }
        { applicationStep === 4 && <FatherInfo /> }
        { applicationStep === 5 && <DocumentsUpload /> }
        { applicationStep === 6 && <ReviewApplication /> }
        <div className={applicationStep === 1 ? "": 'flex justify-between md:justify-around'}>
                {applicationStep > 1 &&<div className="mt-10 mb-12" onClick={handlePrevious}>
                    <button className="next-button rounded-md bg-red-900 text-white w-28 px-2 py-2 flex justify-around 
                    items-center active:text-sm">
                        <BsArrowLeft className=""/><div>Previous</div> 
                    </button>
                </div>}
                {applicationStep <= 5 && (<div className="mt-10 mb-12" onClick={handleNext}>
                    <button className="next-button rounded-md bg-red-900 text-white w-28 px-2 py-2 flex justify-around 
                    items-center active:text-sm">
                        <div>Next</div> <BsArrowRight className=""/>
                    </button>
                </div>)}
                {applicationStep === 6 && ( <div className="mt-10 mb-12">
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
