"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }).min(1, "Email is required"),
    password: z.string({
        invalid_type_error: 'Invalid Password',
      }).min(1, "Password is required"),
  })

export async function signInUser(formData) {

    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
     
    // Return early if the form data is invalid
    if (!validatedFields.success) {
    return {
        errors: validatedFields.error.flatten().fieldErrors,
    }}

    // const rawFormData = Object.fromEntries(formData)
    // const { email, password } = rawFormData
    const user = {
        email: "",
        password: "",
        role: ""
    }
    // console.log(email)
    try{
        //Find the user by email
        const result = await sql`SELECT email, password, role FROM users WHERE email = ${email}`
        //if user is not found return a message "User does not exist"
        if(result.rows.length === 0){
            console.log("User does not exist")
            return { message: "User does not exist"}
        }
        const userPayload = result.rows[0]
        console.log(userPayload)
        if(await bcrypt.compare(validatedFields.password, userPayload.password)){
            user.email = userPayload.email
            user.password = userPayload.password
            user.role = userPayload.role
            // const userToken = await jwt.sign()
            console.log("Login was successful")
        }else{
            console.log("Wrong password")
            return { message: "Email and password do not match" }
        }
    }catch(err){
        return {message: `Database error: ${err}`}
    }
    // revalidatePath("/apply")
    if(user.role === "admin"){
        redirect("/admin/dashboard")
    }else if(user.role === "applicant"){
        redirect("/apply")
    }
    
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




//@/app/actions.tsx
'use server'
import { z } from 'zod'
 
const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  })

export async function createUser(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
      })
     
      // Return early if the form data is invalid
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
  return {
    message: 'Please enter a valid email',
  }
}

 */