import { sql } from "@vercel/postgres"
import {getSession} from "@/utils/lib/session"
import { NextResponse } from "next/server"
import { saveLearnerInfo, saveMarksInfo, saveMedicalInfo, saveMotherInfo, 
    saveFatherInfo, saveBlobsToDB } from "@/utils/lib/db-queries"

export async function POST(req){

    const formData = await req.json()

    //Get userId from getSession() to pass it along with the inserted data as a foreign key
    const { userId } = await getSession()
    
    if(!userId){
        return NextResponse.json({success: false, message: "User session has expired..."})
    }
    if(!formData.learnerInfo||!formData.marks||!formData.medicalInfo||!formData.motherInfo){
        return NextResponse.json({success: false, message: "Make sure to not leave any required fields blank"})
    }

    function getAverage(marks){
        let result = 0
        if(!marks.afrikaans){
            result = (marks.english+marks.isixhosa+marks.mathematics+marks.LO+
                marks.ns+marks.creativeArts+marks.ems+marks.ss+marks.tech)/9
        }else if(!marks.isixhosa){
            result = (marks.english+marks.isixhosa+marks.mathematics+marks.LO+
                marks.ns+marks.creativeArts+marks.ems+marks.ss+marks.tech)/9
        }
        return result
    }
    const averageMark = getAverage(formData.marks)

    try{
        console.log("Test 1")
        await saveLearnerInfo(formData, userId)
        console.log("Test 2")
        await saveMarksInfo(formData, averageMark, userId)
        console.log("Test 3")
        await saveMedicalInfo(formData, userId)
        console.log("Test 4")
        await saveMotherInfo(formData, userId)
        console.log("Test 5")
        await saveFatherInfo(formData, userId)
        console.log("Test 6")
        await saveBlobsToDB(formData, userId)
        console.log("Test 7")
    }catch(err){
        console.log("Server error occured...")
        return NextResponse.json({
            success: false, 
            message: "Error: Make sure you are not leaving any required information blank..."})
    }

    return NextResponse.json({success: true, message: "Application was submitted successfully..."})
}
