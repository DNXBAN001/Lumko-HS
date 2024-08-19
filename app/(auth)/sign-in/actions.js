"use server";

import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function signInUser(formData) {

    const rawFormData = Object.fromEntries(formData)
    const { email, password } = rawFormData

    try{
        //Find the user by email
        const result = await sql`SELECT email, password FROM users WHERE email = ${email}`
        //if user is not found return a message "User does not exist"
        if(result.rows.length === 0){
            console.log("User does not exist")
            return { message: "User does not exist"}
        }
        const user = result.rows[0]
        if(await bcrypt.compare(password, user.password)){
            console.log("Login was successful")
        }else{
            console.log("Wrong password")
            return { message: "Email and password do not match" }
        }
    }catch(err){
        return {message: `Database error: ${err}`}
    }
    // revalidatePath("/apply")
    redirect("/apply")
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