"use client"

import React from 'react'
import { useGlobalContext } from '@/utils/context'

export default function MotherInfo() {

    const { setApplicationInfo } = useGlobalContext()

    const [formData, setFormData] = React.useState({
        title: null, firstName: null, lastName: null, idNumber: null, maritalStatus: null,email: null, 
        phone: null, occupation: null, employer: null, physicalAddress: null, postalAddress: null
    })

    React.useEffect(() => {
        // console.log(formData)
        saveFormData()
    }, [formData])

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevFormData => ({
              ...prevFormData,
              [name]: type === "checkbox" ? checked: value
            }) 
        )
    }
    function saveFormData(){
        if(formData.title&&formData.firstName&&formData.lastName&&formData.idNumber&&formData.maritalStatus
            &&formData.phone&&formData.physicalAddress){
                setApplicationInfo(prevState => ({
                    ...prevState,
                    motherInfo: formData
                }))
        }
    }

    return (
        <div className="mt-12">
            <h3 className="font-semibold">Parents Information</h3>
            <h3 className="mt-4 text-black font-semibold">Mother/Guardian Info</h3>
            <div className="mt-5">
                <select 
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    className="bg-gray-100 w-3/5 md:w-1/5 px-3 p-2"
                    required
                    >
                    <option value="">--Choose Title--</option>
                    <option value="Ms.">Ms</option>
                    <option value="Mrs.">Mrs</option>
                    <option value="Dr.">Dr</option>
                    <option value="Adv">Adv</option>
                    <option value="Prof.">Prof</option>
                    
                </select>
            </div>
            <div className="guardian-names lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="firstName" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="lastName" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="idNumber" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="single" required onChange={handleChange}
                                className="sm:ml-2" value="single" checked={formData.maritalStatus === "single"}
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="married" required onChange={handleChange}
                                className="sm:ml-3" value="married" checked={formData.maritalStatus === "married"} 
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="widow" required onChange={handleChange}
                                className="sm:ml-3" value="widow" checked={formData.maritalStatus === "widow"} 
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="maritalStatus" id="divorced" required onChange={handleChange}
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
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="phone" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian phone"
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
                    <input type="text" name="motherEmployer" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Name of Company/ Employer"
                    />
                </div>
            </div>
            <div className="address-achievements lg:mt-4 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="physicalAddress" rows={5} required onChange={handleChange}
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