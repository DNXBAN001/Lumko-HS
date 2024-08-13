"use server"

import { redirect } from "next/navigation"

export async function allowApplication(prevState: any, formData: FormData) {

    // const rawFormData = {
    //     grade: formData.get("grade-input")
    // }
    const res = await fetch("https://jsonplaceholder.typicode.com/users/")
    const rawFormData = Object.fromEntries(formData)
    console.log("The grade selected is: ",rawFormData.grade)
    if(rawFormData.grade !== "8"){
        return {
            message: "Sorry, our school is currently not accepting any Grade "+rawFormData.grade+" applications"
        }
    }
    redirect("/apply/fill-form")//direct user to the application form

}