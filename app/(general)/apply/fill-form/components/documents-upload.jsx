"use client"

import React from "react"
import { upload } from '@vercel/blob/client';
import { useGlobalContext } from "@/utils/context"


export default function DocumentsUpload(){

    const { applicationInfo, setApplicationInfo, setApplicationStep } = useGlobalContext()
    
    const [resMsg, setResMsg] = React.useState({
        learner_birth_certificate: "", mother_id: "", latest_report: "", proof_of_residence: "", learner_face_photo: ""
    })
    const [documents, setDocuments] = React.useState({
        learner_birth_certificate: "", mother_id: "", latest_report: "", proof_of_residence: "", learner_face_photo: ""
    })

    const learner_birth_certificate = React.useRef(null);
    const mother_id = React.useRef(null);
    const latest_report = React.useRef(null);
    const proof_of_residence = React.useRef(null);
    const learner_face_photo = React.useRef(null);

    React.useEffect(() => {
        console.log(resMsg)
    }, [resMsg])

    React.useEffect(() => {
        console.log(documents)
        saveDocumentsUrls()
    }, [documents])

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
        if(inputFileRef === learner_birth_certificate){
            resMsgField = "learner_birth_certificate"
        }else if(inputFileRef === mother_id){
            resMsgField = "mother_id"
        }else if(inputFileRef === latest_report){
            resMsgField = "latest_report"
        }else if(inputFileRef === proof_of_residence){
            resMsgField = "proof_of_residence"
        }else if(inputFileRef === learner_face_photo){
            resMsgField = "learner_face_photo"
        }
        setResMsg(prevState => ({
            ...prevState, [resMsgField]: res.message
        }))
        console.log("Blob url returned: ", res.blob.url)
        setDocuments(prevState => ({
            ...prevState, [resMsgField]: res.blob.url
        }))
    }

    function saveDocumentsUrls(){
        if(documents.learner_birth_certificate&&documents.mother_id&&documents.latest_report
            &&documents.proof_of_residence&&documents.learner_face_photo){
            setApplicationInfo(prevState => ({
                ...prevState, documents: documents
            }))
        }
    } 

    return(
        <div className="mt-12">
            <h3 className="text-black font-semibold">Upload documents </h3>
            <div className="">

                <div className="md:flex mt-8">
                    <p>Learner's birth certificate</p>
                    <input type="file" name="learnerBirthCertificate" required 
                        className="bg-gray-300 ml-0 py-1 rounded-md md:ml-14" ref={learner_birth_certificate}
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-10">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg" 
                        onClick={() => handleUpload(learner_birth_certificate)}>Upload</button>
                        {resMsg.learner_birth_certificate && 
                            ( <p className="text-green-600 pl-12 py-2">{resMsg.learner_birth_certificate}</p>)}
                    </div>
                </div>
                <div className="md:flex mt-8">
                    <p>Mother/Guadian ID</p>
                    <input type="file" name="motherId" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={mother_id} 
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-12">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(mother_id)}>Upload</button>
                        {resMsg.mother_id && ( <p className="text-green-600 pl-12 py-2">{resMsg.mother_id}</p>)}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner latest report</p>
                    <input type="file" name="latestReport" required className="bg-gray-300 py-1 rounded-md md:ml-20" 
                        ref={latest_report} 
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-12">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(latest_report)}>Upload</button>
                        {resMsg.latest_report && ( <p className="text-green-600 pl-12 py-2">{resMsg.latest_report}</p>)}
                    </div>
                </div>
                <div className="md:flex mt-8">
                    <p>Proof of residence</p>
                    <input type="file" name="proofOfResidence" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={proof_of_residence}
                        accept="image/*, application/pdf" />
                    <div className="upload-button-wrapper flex md:ml-11">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(proof_of_residence)}>Upload</button>
                        {resMsg.proof_of_residence && ( <p className="text-green-600 pl-12 py-2">{resMsg.proof_of_residence}</p>)}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner face photo</p>
                    <input type="file" name="learnerFacePhoto" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        ref={learner_face_photo}
                        accept="image/*, application/pdf"/> 
                    <div className="upload-button-wrapper flex md:ml-10">
                        <button className="upload-button mt-2 md:mt-0 px-2 rounded-lg"
                         onClick={() => handleUpload(learner_face_photo)}>Upload</button>
                        {resMsg.learner_face_photo && ( <p className="text-green-600 pl-12 py-2">{resMsg.learner_face_photo}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}