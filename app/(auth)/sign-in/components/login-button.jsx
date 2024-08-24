"use client"

import { useFormStatus } from 'react-dom';

export default function LoginButton() {
    
    const { pending, data } = useFormStatus()

    return (
        <>
            <button type="submit" name="sign-in-button" disabled={pending}
                className="login-button submit-button py-1 px-4 active"
            >{pending ? "Signing in...": "Sign in"}</button>
        </>
    )
}
