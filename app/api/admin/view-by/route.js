import { NextResponse } from "next/server";

export async function GET(req){

    const formData = await req.json()

    try{
        const result = await sql`SELECT firstname, lastname, email, status, class FROM learner_info
        `
    }catch(err){
        return NextResponse.json({success: false, message: "Error while fetching the applications!"})
    }

    return NextResponse.json({success: true, message: "Sent back fetch results"})
}