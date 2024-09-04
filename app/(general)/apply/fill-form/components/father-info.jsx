"use client"

import React from 'react'
import { useGlobalContext } from '@/utils/context'

export default function FatherInfo() {

    const { setApplicationInfo } = useGlobalContext()

    const [formData, setFormData] = React.useState({
        title: "", firstName: "", lastName: "", idNumber: "", maritalStatus: "",
        email: "", phone: "", occupation: "", employer: ""
    })

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
                    <input type="text" name="firstName" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="lastName" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="idNumber" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="single" onChange={handleChange}
                                className="sm:ml-2" value="single" checked={formData.maritalStatus === "single"}
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="married" onChange={handleChange}
                                className="sm:ml-3" value="married" checked={formData.maritalStatus === "married"} 
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="widow" onChange={handleChange}
                                className="sm:ml-3" value="widow" checked={formData.maritalStatus === "widow"} 
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="divorced" onChange={handleChange}
                                className="sm:ml-3" value="divorced" checked={formData.maritalStatus === "divorced"} 
                            />
                            <label htmlFor="divorced" className="ml-1">Divorced</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-phone lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="email" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="phone" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father phone"
                    />
                </div>
            </div>
            <div className="occupation-employer lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="occupation" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Occupation"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="employer" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Name of Company/ Employer"
                    />
                </div>
            </div>
            <div className="address-achievements lg:mt-4 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="physicalAddress" rows={5} onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="postalAddress" rows={5} onChange={handleChange}
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