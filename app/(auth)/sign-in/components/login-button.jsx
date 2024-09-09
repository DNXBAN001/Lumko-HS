// "use client"

// import { useFormStatus } from 'react-dom';

export default function LoginButton({pending}) {
    
    // const { pending, data } = useFormStatus()

    return (
        <>
            <button type="submit" name="sign-in-button" disabled={pending}
                className="login-button submit-button py-1 px-4 active"
            >{pending ? "Loading...": "Sign in"}</button>
        </>
    )
}
