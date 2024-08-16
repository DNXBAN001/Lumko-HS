"use server"
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"

export async function createUser(/*prevState: any,*/ formData: FormData) {

    // const rawFormData = { 
    //     firstName: formData.get("firstName"),
    //     lastName: formData.get("lastName"),
    //     email: formData.get("email"),
    //     phone: formData.get("phone"),
    //     password: formData.get("password"),
    //     confirmPassword: formData.get("confirm-password"),
    // }
    const rawFormData = Object.fromEntries(formData)
    const { firstName, lastName, email, phone, password, confirmPassword } = rawFormData
    console.log(firstName)

    if(password !== confirmPassword){
        return { message: "Passwords do not match!" }
    }

    try{
        const hashedPassword = await bcrypt.hash(JSON.stringify(password), 10)
        console.log(hashedPassword)
        await sql`
            INSERT INTO Users (firstName, lastName, email, phone, password) 
            VALUES (${JSON.stringify(firstName)}, ${JSON.stringify(lastName)}, 
            ${JSON.stringify(email)}, ${JSON.stringify(phone)}, ${JSON.stringify(hashedPassword)});`;
    }catch(err){
        return {
            message: 'Database Error: Failed to Create User.',
          };
    }
    console.log("User was created successfully")
    // Revalidate the cache for the apply page and redirect the user.
    // revalidatePath('/apply');
    redirect("/apply")

}
/*
await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
  */