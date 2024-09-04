"use client"

import React from "react"
import { getMotherInfo } from "@/utils/lib/db-queries.ts"

export default function MotherInfo(props) {

    const [motherInfo, setMotherInfo] = React.useState()

    React.useEffect(() => {
        async function getLearnerMotherInfo(){
            const res = await getMotherInfo(props.applicantID)
            setMotherInfo(res[0])
        }
        getLearnerMotherInfo()
    }, [])

    React.useEffect(() => {
        // console.log(motherInfo)
    }, [motherInfo])

    return (
        <div className="mt-12">
            <h3 className="text-black font-semibold">Parents Information</h3>
            <h3 className="mt-4 text-black font-semibold">Mother/Guardian Info</h3>
            <div className="mt-5">
                <input id="title" name="title" defaultValue={motherInfo?.title}
                    className="bg-gray-100 w-3/5 md:w-1/5 px-3 p-2"
                />
            </div>
            <div className="guardian-names lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="firstName" defaultValue={motherInfo?.firstname}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="lastName" defaultValue={motherInfo?.lastname}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="idNumber" defaultValue={motherInfo?.id_number}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="single" /* onChange={handleChange}*/
                                className="sm:ml-2" defaultValue="single" checked={motherInfo?.marital_status === "single"}
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="married" /*onChange={handleChange}*/
                                className="sm:ml-3" defaultValue="married" checked={motherInfo?.marital_status === "married"}
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="widow" /*onChange={handleChange}*/
                                className="sm:ml-3" defaultValue="widow" checked={motherInfo?.marital_status === "widow"}
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="motherMaritalStatus" id="divorced"/*onChange={handleChange}*/
                                className="sm:ml-3" defaultValue="divorced" checked={motherInfo?.marital_status === "divorced"} 
                            />
                            <label htmlFor="divorced" className="ml-1">Divorced</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-phone lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="email" defaultValue={motherInfo?.email}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="phone" defaultValue={motherInfo?.phone}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian phone"
                    />
                </div>
            </div>
            <div className="occupation-employer lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="occupation" defaultValue={motherInfo?.occupation}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Occupation"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="employer" defaultValue={motherInfo?.employer}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Name of Company/ Employer"
                    />
                </div>
            </div>
            <div className="address-achievements lg:mt-4 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="physicalAddress" rows={5} defaultValue={motherInfo?.physical_address}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="postalAddress" rows={5} defaultValue={motherInfo?.postal_address}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Postal Address"
                    />
                </div>
            </div>
        </div>
    )
}
