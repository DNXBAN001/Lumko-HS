import { sql } from "@vercel/postgres"
import { getSession } from "@/utils/lib/session"
import { NextResponse } from "next/server"
import { updateAdmissionsInfo } from "@/utils/lib/db-queries"

//Update admissions info
export async function PUT(req){
    //Get the form data
    const formData = await req.json()

    //validate the fields
    if(!formData.opening_date||!formData.closing_date||!formData.max_grade_8||!formData.grade_8_classes||
        !formData.max_grade_9||!formData.grade_9_classes||!formData.max_grade_10a||!formData.max_grade_10b||
        !formData.max_grade_10c||!formData.max_grade_10d||!formData.max_grade_11a||!formData.max_grade_11b||
        !formData.max_grade_11c||!formData.max_grade_11d){
            return NextResponse.json({success: false, message: "Make sure to not leave any fields blank"})
    }
    //send query to db
    await updateAdmissionsInfo(formData)
    return NextResponse.json({success: true, message: "Admissions info updated successfully..."})
}

export async function GET(req){
    //check if the user is authorized to access the data
    const user = await getSession()
    if(!user){
        return NextResponse.json({success: false, message: "Unauthorized to access this resource"})
    }
    //if authorized then send response4
    try{
        const result = await sql`select * from admissions_info`
        if(result.rows.length === 0){
            return NextResponse.json({success: false, message: "We have found nothing on the DB that matches your request"})
        }
        const admissionsInfo = result.rows[0]
        console.log("Admin successfully requested for admissions info...")
        return NextResponse.json({success: true, admissionsInfo: admissionsInfo})
    }catch(err){
        return NextResponse.json({success: false, message: "Server error occured..."})
    }
}