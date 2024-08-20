"use client"

import React from 'react'
import { BsArrowLeft,  BsArrowRight} from 'react-icons/bs'

export default function MotherInfo() {

    const [formData, setFormData] = React.useState({
        motherTitle: "",
        motherFirstName: "",
        motherLastName: "",
        motherIdNumber: "",
        motherMaritalStatus: "",
        motherEmail: "",
        motherPhone: "",
        motherOccupation: "",
        motherEmployer: ""
    })

    React.useEffect(() => {
        console.log(formData)
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

    return (
        <div className="mt-12">
            <h3>Parents Information</h3>
            <div className="mt-5">
                <select 
                    id="motherTitle"
                    value={formData.motherTitle}
                    onChange={handleChange}
                    name="motherTitle"
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
                    <input type="text" name="motherFirstName" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="motherLastName" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="motherIdNumber" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="single" required onChange={handleChange}
                                className="sm:ml-2" value="single" checked={formData.motherMaritalStatus === "single"}
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="married" required onChange={handleChange}
                                className="sm:ml-3" value="married" checked={formData.motherMaritalStatus === "married"} 
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="widow" required onChange={handleChange}
                                className="sm:ml-3" value="widow" checked={formData.motherMaritalStatus === "widow"} 
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="divorced" required onChange={handleChange}
                                className="sm:ml-3" value="divorced" checked={formData.motherMaritalStatus === "divorced"} 
                            />
                            <label htmlFor="divorced" className="ml-1">Divorced</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-phone lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="motherEmail" onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="motherPhone" required onChange={handleChange}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian phone"
                    />
                </div>
            </div>
            <div className="occupation-employer lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="motherOccupation" onChange={handleChange}
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
                    <textarea name="physicalAddress" rows={5} required 
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="postalAddress" rows={5}
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