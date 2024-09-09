"use client"

import React from "react"
import { useGlobalContext } from "@/utils/context"


// cloudinary.config({ 
//     cloud_name: 'my_cloud_name', 
//     api_key: 'my_key', 
//     api_secret: 'my_secret'
//   });

export default function DocumentsUpload(){

    const { applicationiInfo, setApplicationInfo, setSupportingDocuments, setApplicationStep } = useGlobalContext()

    const [files, setFiles] = React.useState({
        learnerBirthCertificate: "", motherId: "", latestReport: "",
        proofOfResidence: "", learnerFacePhoto: ""
    })

    React.useEffect(() => {
        console.log(files)
        saveDocuments()
    }, [files])

    function handleFiles(event){
        const {name, value, type} = event.target
        setFiles(prevState => ({
                ...prevState,
                [name]: value
             })
        )
    }
    function saveDocuments(){
        if(files.learnerBirthCertificate&&files.motherId&&files.latestReport&&files.proofOfResidence&&files.learnerFacePhoto){
            setApplicationInfo(files)
            setSupportingDocuments(files)
        }
    }

    function handleUpload(event){
        event.preventDefault()
        if(applicationiInfo.documents){
            setApplicationStep(6)
        }
    }

    return(
        <form /*onSubmit={handleUpload} encType="multipart/form-data"*/ className="mt-12">
            <h3 className="text-black font-semibold">Upload documents </h3>
            <div className="">
                <div className="md:flex mt-8"> 
                    <p>Learner's birth certificate</p>
                    <input type="file" name="learnerBirthCertificate" className="bg-gray-300 ml-0 py-1 rounded-md md:ml-14" 
                         accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles}/>
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
                <div className="md:flex mt-8">
                    <p>Mother/Guadian ID</p>
                    <input type="file" name="motherId" className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner latest report</p>
                    <input type="file" name="latestReport" className="bg-gray-300 py-1 rounded-md md:ml-20" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
                <div className="md:flex mt-8">
                    <p>Proof of residence</p>
                    <input type="file" name="proofOfResidence" className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner face photo</p>
                    <input type="file" name="learnerFacePhoto" className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles}/> 
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
            </div>
        </form>
    )
}