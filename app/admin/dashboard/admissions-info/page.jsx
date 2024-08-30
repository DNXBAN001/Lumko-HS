"use client"

import React from "react"
import { useGlobalContext } from "@/utils/context"


export default function AdmissionsInfo(){

    const [admissionsInfo, setAdmissionsInfo] = React.useState()
    const { isLoading, setIsLoading } = useGlobalContext()

    React.useEffect(() => {
        async function getAdmissionsInfo(){
            const res = await fetch("/api/admin/admissions-info", {
                method: "GET"
            }).then(res => res.json())
            setAdmissionsInfo(res.admissionsInfo)
        }
        getAdmissionsInfo()
    }, [])

    React.useEffect(() => {
        console.log("Admissions info was updated...")
        console.log(admissionsInfo)
    }, [admissionsInfo])

    function handleChange(event){
        const {name, type, value} = event.target
        setAdmissionsInfo(prevAdmissionsInfo => ({
            ...prevAdmissionsInfo, 
            [name]: value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        setIsLoading(true)
        try{
            const res = await fetch("/api/admin/admissions-info", {
                method: "PUT",
                body: JSON.stringify(admissionsInfo)
            }).then(res => res.json())
            setIsLoading(true)
            alert(res.message)
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
                        <input id="yes" name="is_applications_open" type="radio"
                        value="yes" checked={admissionsInfo?.is_applications_open === "yes"} onChange={handleChange} />
                        <label htmlFor="yes" className="ml-2">Yes</label>
                    </div>
                    <div className="ml-4">
                        <input id="no" name="is_applications_open" type="radio"
                        value="no" checked={admissionsInfo?.is_applications_open === "no"} onChange={handleChange}/>
                        <label htmlFor="no" className="ml-2">No</label>
                    </div>
                </div>
                <div className="mt-8 lg:flex">
                    <div className="opening-closing-date flex items-center w-full lg:w-auto">
                        <p>Opening date</p>
                        <input name="opening_date" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy" onChange={handleChange} defaultValue={admissionsInfo?.opening_date}/>
                    </div>
                    <div className="opening-closing-date flex items-center mt-8 w-full lg:w-auto lg:mt-0">
                        <p className="lg:ml-12">Closing date</p>
                        <input name="closing_date" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy" onChange={handleChange} defaultValue={admissionsInfo?.closing_date}/>
                    </div>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 8 ?</p>
                    <input name="max_grade_8" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_8}/>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 8 classes do you have in total ?</p>
                    <input name="grade_8_classes" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleChange} defaultValue={admissionsInfo?.grade_8_classes}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 9 ?</p>
                    <input name="max_grade_9" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_9}/>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 9 classes do you have in total ?</p>
                    <input name="grade_9_classes" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" onChange={handleChange} defaultValue={admissionsInfo?.grade_9_classes}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:ml-10">
                 <div>
                    <p>How many applications are you accepting for following classes?</p>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <input name="max_grade_10a" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10A" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_10a}/>
                    <input name="max_grade_10b" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10B" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_10b}/>
                    <input name="max_grade_10c" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10C" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_10c}/>
                    <input name="max_grade_10d" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="10D" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_10d}/>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:ml-10">
                <div>
                    <p>How many applications are you accepting for following classes?</p>
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <input name="max_grade_11a" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11A" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_11a}/>
                    <input name="max_grade_11b" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11B" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_11b}/>
                    <input name="max_grade_11c" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11C" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_11c}/>
                    <input name="max_grade_11d" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="11D" onChange={handleChange} defaultValue={admissionsInfo?.max_grade_11d}/>
                </div>
            </div>
            <div className="my-12 bg-red-900 text-white w-28 px-4 py-2 cursor-pointer rounded-md lg:ml-10">
                <button type="submit" name="saveButton" className="w-full active:text-sm" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}