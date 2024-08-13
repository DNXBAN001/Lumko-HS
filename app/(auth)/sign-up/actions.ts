"use server"

export async function createUser(formData: FormData) {
    "use server"

    // const rawFormData = { 
    //     firstName: formData.get("firstName"),
    //     lastName: formData.get("lastName"),
    //     email: formData.get("email"),
    //     phone: formData.get("phone"),
    //     password: formData.get("password"),
    //     confirmPassword: formData.get("confirm-password"),
    // }
    const rawFormData = Object.fromEntries(formData)

    console.log(rawFormData.confirmPassword)

}