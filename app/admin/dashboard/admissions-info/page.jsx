"use client"

import React from "react";
import { useGlobalContext } from "@/utils/context"
import { getAdmissionByClass, getAdmissionDates, 
    updateAdmissionDates, updateAdmissionByClass } from "@/utils/lib/db-queries"


export default function AdmissionsInfo(){

    const [admissionDates, setAdmissionDates] = React.useState()
    const [classAdmissionInfo, setClassAdmissionInfo] = React.useState([])
    const { isLoading, setIsLoading } = useGlobalContext()
    const [grade8Info, setGrade8Info] = React.useState()
    const [grade9Info, setGrade9Info] = React.useState()
    const [grade10AInfo, setGrade10AInfo] = React.useState()
    const [grade10BInfo, setGrade10BInfo] = React.useState()
    const [grade10CInfo, setGrade10CInfo] = React.useState()
    const [grade10DInfo, setGrade10DInfo] = React.useState()
    const [grade11AInfo, setGrade11AInfo] = React.useState()
    const [grade11BInfo, setGrade11BInfo] = React.useState()
    const [grade11CInfo, setGrade11CInfo] = React.useState()
    const [grade11DInfo, setGrade11DInfo] = React.useState()

    React.useEffect(() => {
        async function admissionDatesInfo(){
            const datesInfo = await getAdmissionDates()
            setAdmissionDates(datesInfo)
        }
        async function classAdmissionsInfo(){
            const classInfo = await getAdmissionByClass()
            setClassAdmissionInfo(classInfo)
        }
        admissionDatesInfo()
        classAdmissionsInfo()
    }, [])

    React.useEffect(() => {
        setGrade8Info({ class_grade: "grade8", max_intake: classAdmissionInfo[0]?.max_intake, 
            total_classes: classAdmissionInfo[0]?.total_classes,
        })
        setGrade9Info({ class_grade: "grade9", max_intake: classAdmissionInfo[1]?.max_intake, 
            total_classes: classAdmissionInfo[1]?.total_classes 
        })
        setGrade10AInfo({ class_grade: "grade10A", max_intake: classAdmissionInfo[2]?.max_intake })
        setGrade10BInfo({ class_grade: "grade10B", max_intake: classAdmissionInfo[3]?.max_intake })
        setGrade10CInfo({ class_grade: "grade10C", max_intake: classAdmissionInfo[4]?.max_intake })
        setGrade10DInfo({ class_grade: "grade10D", max_intake: classAdmissionInfo[5]?.max_intake })
        setGrade11AInfo({ class_grade: "grade11A", max_intake: classAdmissionInfo[6]?.max_intake })
        setGrade11BInfo({ class_grade: "grade11B", max_intake: classAdmissionInfo[7]?.max_intake })
        setGrade11CInfo({ class_grade: "grade11C", max_intake: classAdmissionInfo[8]?.max_intake })
        setGrade11DInfo({ class_grade: "grade11D", max_intake: classAdmissionInfo[9]?.max_intake })
    }, [classAdmissionInfo])

    React.useEffect(()=>{
        console.log(admissionDates)
        console.log(classAdmissionInfo)
    },[classAdmissionInfo])



    function handleAdmissionDates(event){
        const {name, type, value} = event.target
        setAdmissionDates(prevAdmissionsInfo => ({
            ...prevAdmissionsInfo, 
            [name]: value
        }))
    }
    function handleGrade8(event){
        const {name, value} = event.target
        setGrade8Info(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade9(event){
        const {name, value} = event.target
        setGrade9Info(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade10A(event){
        const {name, value} = event.target
        setGrade10AInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade10B(event){
        const {name, value} = event.target
        setGrade10BInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade10C(event){
        const {name, value} = event.target
        setGrade10CInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade10D(event){
        const {name, value} = event.target
        setGrade10DInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade11A(event){
        const {name, value} = event.target
        setGrade11AInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade11B(event){
        const {name, value} = event.target
        setGrade11BInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade11C(event){
        const {name, value} = event.target
        setGrade11CInfo(prevState => ({...prevState, [name]: value}))
    }
    function handleGrade11D(event){
        const {name, value} = event.target
        setGrade11DInfo(prevState => ({...prevState, [name]: value}))
    }

    async function handleSubmit(event){
        event.preventDefault()
        setClassAdmissionInfo([grade8Info, grade9Info, grade10AInfo, grade10BInfo, grade10CInfo,
            grade10DInfo, grade11AInfo, grade11BInfo, grade11CInfo, grade11DInfo
        ])
        setIsLoading(true)
        try{
            await updateAdmissionDates(admissionDates)
            for(let i = 0; i < classAdmissionInfo.length; i++){
                console.log(classAdmissionInfo[i])
                await updateAdmissionByClass(classAdmissionInfo[i])
            }
            setIsLoading(false)
            alert("Updates saved successfully...")
        }catch(err){
            alert("Error while trying to save!")
        }
    }

    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-semibold lg:ml-10">Admissions Info</h1>
            </div>
            <div className="mt-12 lg:ml-10">
                <div className="flex">
                    <p className="font-semibold">Open applications?</p>
                    <div className="ml-8">
                        <input id="yes" name="is_applications_open" type="radio" value="yes" 
                        checked={admissionDates?.is_applications_open === "yes"} onChange={handleAdmissionDates} />
                        <label htmlFor="yes" className="pl-1">Yes</label>
                    </div>
                    <div className="ml-4">
                        <input id="no" name="is_applications_open" type="radio"
                        value="no" checked={admissionDates?.is_applications_open === "no"} onChange={handleAdmissionDates}/>
                        <label htmlFor="no" className="pl-1">No</label>
                    </div>
                </div>
                <div className="mt-8 lg:flex">
                    <div className="opening-closing-date flex items-center w-full lg:w-auto">
                        <p>Opening date</p>
                        <input name="opening_date" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy" onChange={handleAdmissionDates} defaultValue={admissionDates?.opening_date}/>
                    </div>
                    <div className="opening-closing-date flex items-center mt-8 w-full lg:w-auto lg:mt-0">
                        <p className="lg:ml-12">Closing date</p>
                        <input name="closing_date" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy" onChange={handleAdmissionDates} defaultValue={admissionDates?.closing_date}/>
                    </div>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 8 ?</p>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleGrade8} defaultValue={classAdmissionInfo[0]?.max_intake}/>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 8 classes do you have in total ?</p>
                    <input name="total_classes" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleGrade8} defaultValue={classAdmissionInfo[0]?.total_classes}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 9 ?</p>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleGrade9} defaultValue={classAdmissionInfo[1]?.max_intake}/>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 9 classes do you have in total ?</p>
                    <input name="total_classes" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleGrade9} defaultValue={classAdmissionInfo[1]?.total_classes}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:ml-10">
                 <div>
                    <p>How many applications are you accepting for following classes?</p>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10A" onChange={handleGrade10A} defaultValue={classAdmissionInfo[2]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10B" onChange={handleGrade10B} defaultValue={classAdmissionInfo[3]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10C" onChange={handleGrade10C} defaultValue={classAdmissionInfo[4]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10D" onChange={handleGrade10D} defaultValue={classAdmissionInfo[5]?.max_intake}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:ml-10">
                <div>
                    <p>How many applications are you accepting for following classes?</p>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11A" onChange={handleGrade11A} defaultValue={classAdmissionInfo[6]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11B" onChange={handleGrade11B} defaultValue={classAdmissionInfo[7]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11C" onChange={handleGrade11C} defaultValue={classAdmissionInfo[8]?.max_intake}/>
                    <input name="max_intake" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11D" onChange={handleGrade11D} defaultValue={classAdmissionInfo[9]?.max_intake}/>
                </div>
            </div>
            <div className="my-12 bg-red-900 text-white w-28 px-4 py-2 cursor-pointer rounded-md lg:ml-10">
                <button type="submit" name="saveButton" className="w-full active:text-sm" 
                onClick={handleSubmit}>{isLoading ? "Saving..": "Save"}</button>
            </div>
        </div>
    )
}

/*
    import React, {Suspense} from 'react;
    const ProfilePage = React.lazy(() => import('./ProfilePage')); // Lazy-loaded

    // Show a spinner while the profile [data fetching] is loading
    <Suspense fallback={<Spinner />}>
    <ProfilePage />
    </Suspense>
*/