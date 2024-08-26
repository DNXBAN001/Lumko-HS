
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"

export async function POST(req) {
 
    const rawFormData = await req.json()
    const { firstName, lastName, email, phone, password } = rawFormData
    console.log(firstName)
    let user = {
        userId: "",
        email: "",
        role: ""
    }

    // if(password !== confirmPassword){
    //   console.log("Passwords do not match")
    //   return {message: "Passwords do not match!"}
    // }

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
        console.log(result.rows.length)
        //First user to signup is "admin", everyone else is "applicant"
        if(result.rows.length === 0) {
            user.role = "admin"
            console.log("User role was set to: ", user.role)
        }else{
            console.log("test 1")
            user.role = "applicant"
            console.log("test 2")
            console.log("User role was set to: ", user.role)
        }
        //Check if the email is not already in use
        const userExist = result.rows.filter(ele => ele.email === email)
        // console.log(userExist)//when the user already exist, this will display the user obj
        if(userExist.length > 0){
            console.log("Email is already in use")
            return Response.json({ success: false, message: "Email is already in use", status:  409})// 409 Conflict - Account with the email already exist
        }

        //Hash user password before saving it to the DB
        const hashedPassword = await bcrypt.hash(password, 10)
        //Insert user info to the DB
        await sql`
            INSERT INTO users (firstName, lastName, email, phone, role, password) 
            VALUES (${firstName}, ${lastName}, ${email}, 
            ${phone}, ${user.role}, ${hashedPassword});`
        user.email = email
    }catch(err){
        return Response.json({success: false, message: "Database Error: Could not register account"})
    }
    console.log("Account was created successfully")
    return Response.json({success: true, user, message: "Account was created successfully", status: 201})// 201 - Created
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