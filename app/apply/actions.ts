"use server"

import { redirect } from "next/navigation"

export async function allowApplication(formData: FormData) {

    // const rawFormData = {
    //     grade: formData.get("grade-input")
    // }
    const rawFormData = Object.fromEntries(formData)
    console.log("The grade selected is: ",rawFormData.grade)
    if(rawFormData.grade !== "8"){
        return {
            message: "Sorry, our school is not currently accepting any Grade "+rawFormData.grade+" applications"
        }
    }
    redirect("/fill-form")//direct user to the application form

}