"use client"

import React from 'react'
import { redirect } from 'next/navigation'
import { useGlobalContext } from '@/utils/context'

export default function FatherInfo() {

    const { applicationInfo, setApplicationInfo, setApplicationStep } = useGlobalContext()

    const [formData, setFormData] = React.useState({
        title: null, firstName: null, lastName: null, idNumber: null, maritalStatus: null,
        email: null, phone: null, occupation: null, employer: null
    })


    // Redirect user back to /apply page to select the grade applying for if the value is null
    // if(!applicationInfo.learnerInfo.gradeApplyingFor){
    //     redirect("/apply")
    // }
    if(!applicationInfo.motherInfo){
        //another way of redirecting the applicant back to Step 1 if they left any of the required fields
        setApplicationStep(3)
    }

    React.useEffect(() => {
        // console.log(formData)
        saveFormData()
    }, [formData])

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevFormData => (
            {
              ...prevFormData,
              [name]: type === "checkbox" ? checked: value
            }) 
        )
    }
    function saveFormData(){
        setApplicationInfo(prevState => ({
            ...prevState,
            fatherInfo: formData
        }))
    }

    return (
        <div className="mt-12">
            <h3 className="font-semibold">Parents Information</h3>
            <h3 className="mt-4 text-black font-semibold">Father Info</h3>
            <div className="mt-5">
                <select 
                    id="title"
                    value={formData.title}
                    defaultValue={applicationInfo.fatherInfo.title}
                    onChange={handleChange}
                    name="title"
                    className="bg-gray-100 w-3/5 md:w-1/5 px-3 p-2"
                    >
                    <option value="">--Choose Title--</option>
                    <option value="Mr.">Mr</option>
                    <option value="Dr.">Dr</option>
                    <option value="Adv">Adv</option>
                    <option value="Prof.">Prof</option>
                    
                </select>
            </div>
            <div className="guardian-names lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="firstName" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.firstName}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="lastName" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.lastName}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="idNumber" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.idNumber}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="single" onChange={handleChange}
                                defaultChecked={applicationInfo.fatherInfo.maritalStatus}
                                className="sm:ml-2" value="single" checked={formData.maritalStatus === "single"}
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="married" onChange={handleChange}
                                defaultChecked={applicationInfo.fatherInfo.maritalStatus}
                                className="sm:ml-3" value="married" checked={formData.maritalStatus === "married"} 
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="widow" onChange={handleChange}
                                defaultChecked={applicationInfo.fatherInfo.maritalStatus}
                                className="sm:ml-3" value="widow" checked={formData.maritalStatus === "widow"} 
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="divorced" onChange={handleChange}
                                defaultChecked={applicationInfo.fatherInfo.maritalStatus}
                                className="sm:ml-3" value="divorced" checked={formData.maritalStatus === "divorced"} 
                            />
                            <label htmlFor="divorced" className="ml-1">Divorced</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-phone lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="email" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.email}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="phone" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.phone}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father phone"
                    />
                </div>
            </div>
            <div className="occupation-employer lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="occupation" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.occupation}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Occupation"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="employer" onChange={handleChange} defaultValue={applicationInfo.fatherInfo.employer}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Name of Company/ Employer"
                    />
                </div>
            </div>
            <div className="address-achievements lg:mt-4 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="physicalAddress" rows={5} onChange={handleChange} 
                        defaultValue={applicationInfo.fatherInfo.physicalAddress}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="postalAddress" rows={5} onChange={handleChange}
                        defaultValue={applicationInfo.fatherInfo.postalAddress}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Postal Address"
                    />
                </div>
            </div>
        </div>
    )
}

/*
    <input type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
        name="isFriendly"
    />
*/