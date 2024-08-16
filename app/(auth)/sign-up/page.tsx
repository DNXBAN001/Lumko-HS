import Link from "next/link";
// import { createUser } from "./actions";
// import { useActionState } from "react";
import SignupForm from "./components/signup-form";
// import { useFormState } from "react-dom";

export default function Signup() {

    // const [isPending, formAction] = useActionState(createUser, undefined)
    // const [isPending, formAction] = useFormState(createUser, undefined)

    
    return (
        <div className="main-body">
            <div className="auth-container signup-container pb-12">
                <div className="empty-div w-2/5 m-auto pt-12"><p>.</p></div>
                <div className="form-wrapper m-auto px-10 py-12">
                    <div className="text-center text-xl"><h3>Are you new here?</h3></div>
                    <div className="text-center mt-6"><p>Let us help you sign up. This will be quick.</p></div>
                    <SignupForm /> 
                    <div className="w-4/5 m-auto mt-6 text-center">
                        <p>Aleady have an account? <Link href="/sign-in" className="text-blue-600">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}