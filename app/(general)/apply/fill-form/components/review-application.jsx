"use client"

import React from 'react'
import { useGlobalContext } from '@/utils/context.js';
import Image from 'next/image.js';


export default function ReviewApplication() {
    
//   const { supportingDocuments } = useGlobalContext()

  return (
    <div className="">
        <div>
            <p className="mt-12 font-semibold">Submit Application</p>
            <p className="mt-12 w-5/6 md:w-3/5 italic">If you are confident that all the information you have 
                provided is correct and all the necessary documents are uploaded succefully then click on 
                Submit to complete your application
            </p>
        </div>
        {/* <div className="mt-12 w-full">
            <iframe src={supportingDocuments?.learnerBirthCertificate} className="w-full h-80 lg:h-screen" ></iframe>
        </div>
        <div className="mt-12 w-full">
            <iframe src={supportingDocuments?.motherId} className="w-full h-80 lg:h-screen" ></iframe>
        </div>
        <div className="mt-12 w-full">
            <iframe src={supportingDocuments?.latestReport} className="w-full h-80 lg:h-screen" ></iframe>
        </div>
        <div className="mt-12 w-full">
            <iframe src={supportingDocuments?.proofOfResidence} className="w-full h-80 lg:h-screen" ></iframe>
        </div>
        <div className="mt-12 w-full">
            <Image src={supportingDocuments?.learnerFacePhoto} width={1000} height={600} className="" alt="img" />
        </div> */}
    </div>
  )
}