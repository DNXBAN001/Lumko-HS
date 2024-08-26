import { z } from "zod";
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from 'uuid';
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

// const schema = z.object({
//     email: z.string({
//       invalid_type_error: 'Invalid Email',
//     }).min(1, "Email is required"),
//     password: z.string({
//         invalid_type_error: 'Invalid Password',
//       }).min(1, "Password is required"),
//   })

export async function POST(req){

    const formData = await req.json()
    // console.log(formData)

    // const validatedFields = schema.safeParse({
    //     email: formData.get('name'),
    //     password: formData.get("password")
    // })
     
    // Return early if the form data is invalid
    // if (!validatedFields.success) {
    // return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    // }}

    try{
        //Find the user by email
        const result = await sql`SELECT id, email, password, role FROM users WHERE email = ${formData.email}`
        //if user is not found return a message "User does not exist"
        if(result.rows.length === 0){
            console.log("Invalid email")
            return Response.json({success: false, message: "Invalid email!", status: 404})//user not found
        }
        const userFromDB = result.rows[0]
        // console.log(userFromDB)
        if(await bcrypt.compare(formData.password, userFromDB.password)){
            const user ={ userId: userFromDB.id, email: userFromDB.email, role: userFromDB.role }
            console.log("Hi there")
            // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "50m"})//expires in 50 mins
            const accessToken = await new SignJWT(user)
                                                .setProtectedHeader({ alg: "HS256" })
                                                .setIssuedAt()
                                                .setExpirationTime("50 min from now")
                                                .sign(process.env.ACCESS_TOKEN_SECRET);
            console.log(accessToken)
            cookies().set("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: new Date(Date.now() + 1000 * 60 * 50)
            })
            // Check if there's any existing refresh token for the user on the DB
            // if(existingToken){
            //     console.log("User already has an existingToken...")
            //     accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30m"})
            //     refreshToken = existingToken.refreshToken
            // }else{
            //     //generate accessToken
            //     accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30m"})
            //     //generate refreshToken for the user and save it on the DB
            //     const userAgent = req.headers["user-agent"]
            //     const ip = req.ip
            //     refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
            //     const token = new tokenCollection({
            //         refreshToken, userAgent, ip, user
            //     })
            //     await token.save()
            // }
            console.log(user)
            console.log("Login was successful")
            // return new NextResponse("",{
            //     headers: {
            //         "Set-Cookie": serializedCookie
            //     }
            // })
            return NextResponse.json({success: true, user, message: "Login was successful - redirecting...",  status: 200})
        }else{
            console.log("Wrong password")
            return Response.json({success: false, message: "Wrong password!", status: 401 })//401 - unauthorized
        }
    }catch(err){
        return Response.json({success: false, message: "Error: Try checking your network connection"})
    }
}

//logout
export async function GET() {
    // Destroy the session
    cookies().set("accessToken", "", { expires: new Date(0) });
  }

/*
import { db } from '@vercel/postgres';
 
const client = await db.connect();
await client.sql`SELECT 1`;




Paginating responses
When querying databases with a large number of rows, you may want to paginate 
your responses to prevent resource attacks. You can do this by using the LIMIT and OFFSET clauses in your query.

import { sql } from '@vercel/postgres';
 
const pageSize = 10; // Number of records per page
const pageNumber = 1; // Specific page number
 
const offset = (pageNumber - 1) * pageSize;
 
// Fetching records for the specific page number returning 10 records per page
const { rows, fields } =
  await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT ${pageSize} OFFSET ${offset};`;
*/