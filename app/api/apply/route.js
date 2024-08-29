import { sql } from "@vercel/postgres"
import {getSession} from "@/utils/lib/session"
import { NextResponse } from "next/server"

export async function POST(req){

    const formData = await req.json()

    //Get userId from getSession() to pass it along with the inserted data as a foreign key
    // const { userId } = getSession()
    const userId = "2ed018a9-fac4-4594-8909-6b3c9c01910a"
    if(!userId){
        return NextResponse.json({success: false, message: "User session has expired..."})
    }
    if(!formData.learnerInfo||!formData.marks||!formData.medicalInfo||!formData.motherInfo){
        return NextResponse.json({success: false, message: "Make sure to not leave any required fields blank"})
    }

    //Insert data into relevant tables
    const gradeApplyingFor = "8"
    console.log(`${formData.learnerInfo.firstName}, ${formData.learnerInfo.lastName}, ${formData.learnerInfo.idNumber},
        ${formData.learnerInfo.dateOfBirth}, ${formData.learnerInfo.email}, ${formData.learnerInfo.phone},
        ${formData.learnerInfo.presentSchool}, ${formData.learnerInfo.previousSchools}, ${formData.learnerInfo.yearOfPreviousSchools},
        ${formData.learnerInfo.homeLanguage}, ${formData.learnerInfo.religion}, ${formData.learnerInfo.physicalAddress},
        ${formData.learnerInfo.otherAchievements}, ${gradeApplyingFor}, ${userId}`)

    try{
        console.log("Test 1")
        await sql`INSERT INTO learner_info (firstName, lastName, id_number, dob, email, phone, present_school, 
        previous_schools, year_of_previous_schools, home_language, religion, physical_address, other_achievements,
        grade_applying_for, userId) 
        VALUES (${formData.learnerInfo.firstName}, ${formData.learnerInfo.lastName}, ${formData.learnerInfo.idNumber},
        ${formData.learnerInfo.dateOfBirth}, ${formData.learnerInfo.email}, '${formData.learnerInfo.phone}',
        ${formData.learnerInfo.presentSchool}, ${formData.learnerInfo.previousSchools}, ${formData.learnerInfo.yearOfPreviousSchools},
        ${formData.learnerInfo.homeLanguage}, ${formData.learnerInfo.religion}, ${formData.learnerInfo.physicalAddress},
        ${formData.learnerInfo.otherAchievements}, ${gradeApplyingFor}, ${userId});`
        console.log("Test 2")
        await sql`INSERT INTO marks (english, isixhosa, afrikaans, mathematics, life_orientation, natural_sciences, creative_arts, 
        economic_management_sciences, social_sciences, technology, average_mark, userId)
        VALUES (${formData.marks.english}, ${formData.marks.isixhosa}, ${formData.marks.afrikaans}, ${formData.marks.mathematics},
        ${formData.marks.LO}, ${formData.marks.ns}, ${formData.marks.creativeArts}, ${formData.marks.ems}, ${formData.marks.ss},
        ${formData.marks.tech}, ${formData.marks.averageMark}, ${userId})`
        console.log("Test 3")
        await sql`INSERT INTO medicalInfo (medical_aid_number, medical_aid_name, main_member, doctor_name, doctor_phone,
        medical_condition, special_problems, receiving_social_grant, dexterity_of_learner, userId)
        VALUES (${formData.medicalInfo.medicalAidNumber}, ${formData.medicalInfo.medicalAidName}, 
        ${formData.medicalInfo.medicalAidMainMember}, ${formData.medicalInfo.nameOfDoctor},${formData.medicalInfo.doctorContactNumber},
        ${formData.medicalInfo.medicalCondition}, ${formData.medicalInfo.specialProblems}, ${formData.medicalInfo.receivingSocialGrant}, 
        ${formData.medicalInfo.dexterityOfLearner}, ${userId})`
        console.log("Test 4")
        await sql`INSERT INTO mother_info (firstName, lastName, id_number, marital_status, email, phone, occupation, employer,
        physical_address, postal_address, userId)
        VALUES (${formData.motherInfo.firstName}, ${formData.motherInfo.lastName}, ${formData.motherInfo.idNumber}, 
        ${formData.motherInfo.maritalStatus}, ${formData.motherInfo.email}, ${formData.motherInfo.phone}, 
        ${formData.motherInfo.occupation}, ${formData.motherInfo.employer}, ${formData.motherInfo.physicalAddress},
        ${formData.motherInfo.postalAddress}, ${userId})`
        console.log("Test 5")
        await sql`INSERT INTO father_info (firstName, lastName, id_number, marital_status, email, phone, occupation, employer,
        physical_address, postal_address, userId)
        VALUES (${formData.fatherInfo.firstName}, ${formData.fatherInfo.lastName}, ${formData.fatherInfo.idNumber}, 
        ${formData.fatherInfo.maritalStatus}, ${formData.fatherInfo.email}, ${formData.fatherInfo.phone}, 
        ${formData.fatherInfo.occupation}, ${formData.fatherInfo.employer}, ${formData.fatherInfo.physicalAddress},
        ${formData.fatherInfo.postalAddress}, ${userId})`
        console.log("Test 6")
    }catch(err){
        console.log("Server error occured...")
        return NextResponse.json({success: false, message: "Server error occured..."})
    }

    return NextResponse.json({success: true, message: "Application was submitted successfully..."})
}