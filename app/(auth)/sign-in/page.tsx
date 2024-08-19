import Link from "next/link";
import LoginForm from "./components/login-form.jsx";
import { signInUser } from "./actions.js"

export default function SignIn() {
    
    return (
        <div className="main-body">
            <div className="auth-container pb-12">
                <div className="empty-div w-2/5 m-auto pt-12"><p>.</p></div>
                <div className="form-wrapper m-auto p-12">
                    <div className="text-center text-xl"><h3>Hi there... Let us get started</h3></div>
                    <div className="text-center mt-6"><p>Sign in to continue with your application</p></div>
                    <form className="form-container" action={signInUser}>
                        <LoginForm />
                    </form> 
                    <div className="w-4/5 m-auto mt-6 text-center">
                        <p>Need an account? <Link href="/sign-up" className="text-blue-600">Sign up now</Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}