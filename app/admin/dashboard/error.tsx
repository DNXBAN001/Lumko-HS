"use client";
import React from "react";

export default function Error({
    error, 
    reset
}: {
    error: Error,
    reset: () => void
} 
){

    React.useEffect(() => {
        //Log an error to an error reporting service
        console.log(error)
    }, [error])

    return(
        <div>
            <h2>Something went wrong</h2>
            <button 
                onClick={
                    () => reset()
                }
                className="text-red-500"
            >
                Try again
            </button>
        </div>
    )
}