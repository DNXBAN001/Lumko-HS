"use client"

import React from "react"
import { upload } from '@vercel/blob/client';
import { useGlobalContext } from "@/utils/context"


export default function DocumentsUpload(){

    const { applicationInfo, setApplicationInfo, setSupportingDocuments, setApplicationStep } = useGlobalContext()

    const [files, setFiles] = React.useState({
        learnerBirthCertificate: "", motherId: "", latestReport: "",
        proofOfResidence: "", learnerFacePhoto: ""
    })
    const [blob, setBlob] = React.useState(null);
    const [resMsg, setResMsg] = React.useState({
        file1: "", file2: ""
    })

    React.useEffect(() => {
        console.log(files)
        // saveDocuments()
        console.log("Token: ", process.env.BLOB_READ_WRITE_TOKEN)
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

    async function handleUpload(event){
        event.preventDefault()
 
        const file = files.learnerBirthCertificate
        //{ pathname: `string`; contentType: `string`; contentDisposition: `string`; url: `string`; downloadUrl: `string`; }
        const blob = await upload(`lumko-hs/${file.substring(12)}`, file, {
            access: 'public',
            // clientPayload: "vercel_blob_rw_nFDYGW97CdHl9kBu_kRnePvTs9LEaQ1XQo2sHPBMW9dz1Nz",
            handleUploadUrl: '/api/upload',
        });
        setBlob(newBlob);

        // try{
        //     console.log(file)
        //     console.log(JSON.stringify(file))
        //     const res = await fetch("/api/upload", {
        //         method: "POST",
        //         body: JSON.stringify(file)
        //     }).then(result => result.json())
        //     setBlob(res.blob);
        //     setResMsg(prevState => ({
        //         ...prevState, file1: res.message
        //     }))
        // }catch(err){
        //     alert("Error uploading the file")
        // }
    }


    return(
        <div /*onSubmit={handleUpload} encType="multipart/form-data"*/ className="mt-12">
            <h3 className="text-black font-semibold">Upload documents </h3>
            <div className="">
                {/* <div><input type="datetime-local" /></div> */}
                <div className="md:flex mt-8">
                    <p>Learner's birth certificate</p>
                    <input type="file" name="learnerBirthCertificate" required /*accept="image/*,.pdf"*/
                        className="bg-gray-300 ml-0 py-1 rounded-md md:ml-14" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles}/>
                    <div className="flex">
                        <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg" 
                        onClick={handleUpload}>Upload</button>
                        {resMsg.file1 && ( <p className="text-green-600 pl-12 py-2">{resMsg.file1}</p>)}
                    </div>
                </div>
                <div className="md:flex mt-8">
                    <p>Mother/Guadian ID</p>
                    <input type="file" name="motherId" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <div className="flex">
                        <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                        {/* {resMsg.file2 && ( <p className="text-green-600 pl-12 py-2">{resMsg.file2}</p>)} */}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner latest report</p>
                    <input type="file" name="latestReport" required className="bg-gray-300 py-1 rounded-md md:ml-20" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
                <div className="md:flex mt-8">
                    <p>Proof of residence</p>
                    <input type="file" name="proofOfResidence" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles} />
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
            </div>
            <div className="">
                <div className="md:flex mt-8">
                    <p>Learner face photo</p>
                    <input type="file" name="learnerFacePhoto" required className="bg-gray-300 py-1 rounded-md md:ml-24" 
                        accept="image/jpeg, image/jpg, image/png, application/pdf, image/x-eps" onChange={handleFiles}/> 
                    <button className="upload-button mt-2 md:mt-0 md:ml-10 px-2 rounded-lg">Upload</button>
                </div>
            </div>
        </div>
    )
}