"use client"

import React from "react";
import Cookies from "universal-cookie";

const AppContext = React.createContext()

export function ContextProvider({ children }){

    const [user, setUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [applicationInfo, setApplicationInfo] = React.useState({
        learnerInfo: {
            firstName: "", lastName: "", idNumber: "", dateOfBirth: "", email: null, phone: "",
            presentSchool: "", previousSchools: null, yearOfPreviousSchools: null,
            homeLanguage: "", religion: "", physicalAddress: "", otherAchievements: null, 
            gradeApplyingFor: "", class: null
        }, marks: {
            english: "", afrikaans: null, isixhosa: null, mathematics: "", LO: "", ns: "", 
            creativeArts: "", ems: "", ss: "", tech: "", averageMark: 0
        }, medicalInfo: {
            medicalAidNumber: null, medicalAidName: null, medicalAidMainMember: null, nameOfDoctor: null, 
            doctorContactNumber: null, medicalCondition: null, specialProblems: null,
            receivingSocialGrant: null, dexterityOfLearner: null
        }, motherInfo: {
            title: null, firstName: null, lastName: null, idNumber: null, maritalStatus: null, email: null, 
            phone: null, occupation: null, employer: null, physicalAddress: null, postalAddress: null
        }, fatherInfo: {
            title: null, firstName: null, lastName: null, idNumber: null, maritalStatus: null,
            email: null, phone: null, occupation: null, employer: null
        }, documents: "" 
    })
    const [gradeApplyingFor, setGradeApplyingFor] = React.useState("")

    React.useEffect(() => {
        console.log("Global user was updated...",user)
    }, [user])
    

    return(
        <AppContext.Provider
            value={{
                user, setUser,
                isLoading, setIsLoading, 
                applicationInfo, setApplicationInfo,
                gradeApplyingFor, setGradeApplyingFor
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext(){
    return React.useContext(AppContext)
}