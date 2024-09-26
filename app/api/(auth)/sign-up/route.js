
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { createSession } from "@/utils/lib/session";

export async function POST(req) {
 
    const rawFormData = await req.json()
    const { firstName, lastName, email, phone, password, confirmPassword } = rawFormData
    console.log(firstName)
    let user = {
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        role: ""
    }

    if(password !== confirmPassword){
      console.log("Passwords do not match")
      return NextResponse.json({success: false, message: "Passwords do not match!"})
    }

    try{
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        await sql`CREATE TABLE IF NOT EXISTS users (
                  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                  firstName varchar(255) NOT NULL,
                  lastName varchar(255) NOT NULL,
                  email varchar(255) NOT NULL UNIQUE,
                  phone varchar(255) NOT NULL,
                  role varchar(20) NOT NULL,
                  password varchar(255) NOT NULL,
                  created_at timestamp DEFAULT now() NOT NULL
                );`
        const result = await sql`SELECT email FROM users`
        // console.log(result.rows.length)
        //First user to signup is "admin", everyone else is "applicant"
        if(result.rows.length === 0) {
            user.role = "admin"
            console.log("User role was set to: ", user.role)
        }else{
            user.role = "applicant"
            console.log("User role was set to: ", user.role)
        }
        //Check if the email is not already in use
        const userExist = result.rows.filter(rec => rec.email === email.toLowerCase())
        // console.log(userExist)//when the user already exist, this will display the user obj
        if(userExist.length > 0){
            console.log("Email is already in use")
            return NextResponse.json({ success: false, message: "Email is already in use", status:  409})// 409 Conflict - Account with the email already exist
        }

        //Hash user password before saving it to the DB
        const hashedPassword = await bcrypt.hash(password, 10)
        //Insert user info to the DB
        await sql`
            INSERT INTO users (firstName, lastName, email, phone, role, password) 
            VALUES (${firstName}, ${lastName}, ${email.toLowerCase()}, 
            ${phone}, ${user.role}, ${hashedPassword});`
        console.log("Account was created successfully")
        //Get user id from DB since the user is registering for the first time
        const { rows } = await sql`SELECT id FROM users WHERE email=${email.toLowerCase()}`
        console.log("User with the email: ",rows)
        user.userId = rows[0].id
        user.firstName = firstName
        user.lastName = lastName
        user.email = email.toLowerCase()
        await createSession(user)
        console.log("test 1")
    }catch(err){
        return NextResponse.json({success: false, message: "Server Error: Could not register account"})
    }
    
    return NextResponse.json({success: true, user, message: "Account was created successfully", status: 201})// 201 - Created
    // Revalidate the cache for the apply page and redirect the user.
    // revalidatePath('/apply');
    //redirect("/apply")

}
/*


  await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;

  await sql`DELETE FROM invoices WHERE id = ${id}`;

  */