import {logout} from "@/utils/lib/session"
import { NextResponse } from "next/server"

export async function GET(req){
    try{
        await logout()
    }catch(err){
        console.log("Logout failed!")
        return NextResponse.json({success: false, message: "Error while trying to logout..."})
    }

    return NextResponse.json({success: true, message: "You have been logged out successfully..."})
    
}