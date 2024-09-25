"use client"

import React from "react";
import Cookies from "universal-cookie";

const AppContext = React.createContext()

export function ContextProvider({ children }){

    const [user, setUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [applicationInfo, setApplicationInfo] = React.useState({
        learnerInfo: "", marks: "", medicalInfo: "", motherInfo: "", fatherInfo: "", documents: "" 
    })
    const [gradeApplyingFor, setGradeApplyingFor] = React.useState("")
    const [applicationStep, setApplicationStep] = React.useState(1)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    React.useEffect(() => {
        console.log("Global user was updated...",user)
    }, [user])
    

    return(
        <AppContext.Provider
            value={{
                user, setUser,
                isLoading, setIsLoading, 
                isLoggedIn, setIsLoggedIn,
                gradeApplyingFor, setGradeApplyingFor,
                applicationStep, setApplicationStep,
                applicationInfo, setApplicationInfo,
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext(){
    return React.useContext(AppContext)
}