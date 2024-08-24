"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"

export async function createUser(formData) {
 
    const rawFormData = Object.fromEntries(formData)
    const { firstName, lastName, email, phone, password, confirmPassword } = rawFormData
    console.log(firstName)
    let role = ""

    if(password !== confirmPassword){
      console.log("Passwords do not match")
      return {message: "Passwords do not match!"}
    }

    try{
      await sql`CREATE TABLE IF NOT EXISTS users (
                  email varchar(255) NOT NULL PRIMARY KEY,
                  firstName varchar(255) NOT NULL,
                  lastName varchar(255) NOT NULL,
                  phone varchar(255) NOT NULL,
                  role varchar(20) NOT NULL,
                  password varchar(255) NOT NULL
                );`
      const result = await sql`SELECT email, password FROM users`
      //First user to signup is "admin", everyone else is "applicant"
      if(result.rows.length === 0) {
        role = "admin"
        console.log("User role was set to: ", role)
      }else{
        role = "applicant"
        console.log("User role was set to: ", role)
      }
      //Check if the email is not already in use
      const userExist = result.rows.filter(ele => ele.email === email)
      // console.log(userExist)//when the user already exist, this will display the user obj
      if(userExist.length > 0){
        console.log("Email is already in use")
        return { message: "Email is already in use" }
      }

      //Hash user password before saving it to the DB
      const hashedPassword = await bcrypt.hash(password, 10)
      //Insert user info to the DB
      await sql`
          INSERT INTO users (firstName, lastName, email, phone, role, password) 
          VALUES (${firstName}, ${lastName}, ${email}, 
          ${phone}, ${role}, ${hashedPassword});`
    }catch(err){
      return {message: "Database Error: Could not register account"}
    }
    console.log("User was created successfully")
    // Revalidate the cache for the apply page and redirect the user.
    // revalidatePath('/apply');
    redirect("/apply")

}
/*
CREATE TABLE swipellm.outputs (
id SERIAL PRIMARY KEY,
experimentid INT NOT NULL,
variantid INT NOT NULL,
inputid INT NOT NULL,
outputtext TEXT NOT NULL
);

await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;

  await sql`DELETE FROM invoices WHERE id = ${id}`;

  */