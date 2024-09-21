"use client"

import React from "react"
import { upload } from '@vercel/blob/client';
import { useGlobalContext } from "@/utils/context"


export default function DocumentsUpload(){

    const { applicationInfo, setApplicationInfo, setSupportingDocuments, setApplicationStep } = useGlobalContext()

    // const [files, setFiles] = React.useState({
    //     learnerBirthCertificate: "", motherId: "", latestReport: "",
    //     proofOfResidence: "", learnerFacePhoto: ""
    // })
    
    const [resMsg, setResMsg] = React.useState({
        learnerBirthCertificateRef: "", motherIdRef: "", latestReportRef: "", proofOfResidenceRef: "", learnerFacePhotoRef: ""
    })

    const learnerBirthCertificateRef = React.useRef(null);
    const motherIdRef = React.useRef(null);
    const latestReportRef = React.useRef(null);
    const proofOfResidenceRef = React.useRef(null);
    const learnerFacePhotoRef = React.useRef(null);

    React.useEffect(() => {
        console.log(resMsg)
    }, [resMsg])

    function handleFiles(event){
        const {name, value, type} = event.target
        setFiles(prevState => ({
                ...prevState,
                [name]: value
             })
        )
    }
    // function saveDocuments(){
    //     if(files.learnerBirthCertificate&&files.motherId&&files.latestReport&&files.proofOfResidence&&files.learnerFacePhoto){
    //         setApplicationInfo(files)
    //         setSupportingDocuments(files)
    //     }
    // }

    async function handleUpload(inputFileRef){
        // event.preventDefault()

        const file = inputFileRef.current.files[0];
        console.log("Value of file from inputRef: ", file)
        const res = await fetch(`/api/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            },
        ).then(result => result.json())
        let resMsgField = null
        if(inputFileRef === learnerBirthCertificateRef){
            resMsgField = "learnerBirthCertificateRef"
        }else if(inputFileRef === motherIdRef){
            resMsgField = "motherIdRef"
        }else if(inputFileRef === latestReportRef){
            resMsgField = "latestReportRef"
        }else if(inputFileRef === proofOfResidenceRef){
            resMsgField = "proofOfResidenceRef"
        }else if(inputFileRef === learnerFacePhotoRef){
            resMsgField = "learnerFacePhotoRef"
        }
        setResMsg(prevState => ({
            ...prevState, [resMsgField]: res.message
        }))
    }


    return(
        <div className="mt-12">
            <h3 className="text-black font-semibold">Upload documents </h3>
            <div className="">

                <div className="md:flex mt-8">
                    <p>Learner's birth certificate</p>
                    <input type="file" name="learnerBirthCertificate" required /*accept="image/*,.pdf"*/
                        className="bg-gray-300 ml-0 py-1 rounded-md md:ml-14" ref={learnerBirthCertificateRef}
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-10">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg" 
                        onClick={() => handleUpload(learnerBirthCertificateRef)}>Upload</button>
                        {resMsg.learnerBirthCertificateRef && 
                            ( <p className="text-green-600 pl-12 py-2">{resMsg.learnerBirthCertificateRef}</p>)}
                    </div>
                </div>
                <div className="md:flex mt-8">
                    <p>Mother/Guadian ID</p>
                    <input type="file" name="motherId" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={motherIdRef} 
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-12">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(motherIdRef)}>Upload</button>
                        {resMsg.motherIdRef && ( <p className="text-green-600 pl-12 py-2">{resMsg.motherIdRef}</p>)}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner latest report</p>
                    <input type="file" name="latestReport" required className="bg-gray-300 py-1 rounded-md md:ml-20" 
                        ref={latestReportRef} 
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-12">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(latestReportRef)}>Upload</button>
                        {resMsg.latestReportRef && ( <p className="text-green-600 pl-12 py-2">{resMsg.latestReportRef}</p>)}
                    </div>
                </div>
                <div className="md:flex mt-8">
                    <p>Proof of residence</p>
                    <input type="file" name="proofOfResidence" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={proofOfResidenceRef}
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-11">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(proofOfResidenceRef)}>Upload</button>
                        {resMsg.proofOfResidenceRef && ( <p className="text-green-600 pl-12 py-2">{resMsg.proofOfResidenceRef}</p>)}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner face photo</p>
                    <input type="file" name="learnerFacePhoto" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={learnerFacePhotoRef}
                        accept="image/*, application/pdf"/> 
                    <div className="upload-button-wrapper flex md:ml-10">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(learnerFacePhotoRef)}>Upload</button>
                        {resMsg.learnerFacePhotoRef && ( <p className="text-green-600 pl-12 py-2">{resMsg.learnerFacePhotoRef}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}