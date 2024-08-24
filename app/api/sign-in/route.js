import { z } from "zod";
import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

// const schema = z.object({
//     email: z.string({
//       invalid_type_error: 'Invalid Email',
//     }).min(1, "Email is required"),
//     password: z.string({
//         invalid_type_error: 'Invalid Password',
//       }).min(1, "Password is required"),
//   })

export async function POST(req){

    let formData = await req.json()
    console.log(formData)

    // const validatedFields = schema.safeParse({
    //     email: formData.get('name'),
    //     password: formData.get("password")
    // })
     
    // Return early if the form data is invalid
    // if (!validatedFields.success) {
    // return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    // }}
    console.log("test 1")
    const user = {
        email: "",
        password: "",
        role: ""
    }

    try{
        //Find the user by email
        const result = await sql`SELECT email, password, role FROM users WHERE email = ${formData.email}`
        console.log("test 2")
        //if user is not found return a message "User does not exist"
        if(result.rows.length === 0){
            console.log("Invalid email")
            return Response.json({message: "Invalid email!", status: 404})
        }
        const userPayload = result.rows[0]
        console.log(userPayload)
        if(await bcrypt.compare(formData.password, userPayload.password)){
            user.email = userPayload.email
            user.password = userPayload.password
            user.role = userPayload.role
            // const userToken = await jwt.sign()
            console.log("Login was successful")
            return Response.json({user, message: "Login was successful",  status: 200})
        }else{
            console.log("Wrong password")
            return Response.json({ message: "Wrong password!", status: 401 })//401 - unauthorized
        }
    }catch(err){
        return {message: `Database error: ${err}`}
    }
    // revalidate next path
    // if(user.role === "admin"){
    //     redirect("/admin/dashboard")
    // }else if(user.role === "applicant"){
    //     console.log("test 4")
    //     redirect("/apply")
    // }
}