import { z } from "zod";
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server";
import { createSession } from "@/utils/lib/session";

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
        const result = await sql`SELECT id, firstName, lastName, email, password, role FROM users
             WHERE email = ${formData.email.toLowerCase()}`
        //if user is not found return a message "User does not exist"
        if(result.rows.length === 0){
            console.log("Invalid email")
            return NextResponse.json({success: false, message: "Invalid email!", status: 404})//user not found
        }
        const userFromDB = result.rows[0]
        // console.log(userFromDB)
        if(await bcrypt.compare(formData.password, userFromDB.password)){
            const user ={ userId: userFromDB.id, firstName: userFromDB.firstname, 
                lastName: userFromDB.lastname, email: userFromDB.email, role: userFromDB.role }
            await createSession(user) 
            // console.log(user)
            console.log("Login was successful")
            return NextResponse.json({success: true, user, message: "Login was successful - redirecting..."})
        }else{
            console.log("Wrong password")
            return NextResponse.json({success: false, message: "Wrong password!", status: 401 })//401 - unauthorized
        }
    }catch(err){
        return NextResponse.json({success: false, message: "Error: Server error"})
    }
}

//logout
// export async function GET() {
//     // Destroy the session
//     cookies().set("accessToken", "", { expires: new Date(0) });
//   }

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