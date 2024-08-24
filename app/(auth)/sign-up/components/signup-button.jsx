// "use client"

// import { useFormStatus } from 'react-dom';

export default function SignupButton({pending}) {
    
    // const { pending, data } = useFormStatus()

    return (
        <>
            <button type="submit" name="sign-in-button" disabled={pending}
                className="login-button submit-button py-1 px-4 active"
            >{pending ? "Signing up...": "Sign up"}</button>
        </>
    )
}
