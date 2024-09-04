"use client"

import React from "react"
import { getMedicalInfo } from "@/utils/lib/db-queries.ts"

export default function MedicalInfo(props) {

    const [medicalInfo, setMedicalInfo] = React.useState()

    React.useEffect(() => {
        
        async function getLearnerMedicalInfo(){
            const res = await getMedicalInfo(props.applicantID)
            setMedicalInfo(res[0])
        }
        getLearnerMedicalInfo()
    }, [])

    React.useEffect(() => {
        // console.log(medicalInfo)
    }, [medicalInfo])

    return (
        <div className="mt-12">
            <h3 className="text-black font-semibold">Learner Medical Information</h3>
            <div className="mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidNumber" defaultValue={medicalInfo?.medical_aid_number}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidName" defaultValue={medicalInfo?.medical_aid_name}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Name"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidMainMember" defaultValue={medicalInfo?.main_member}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Main Member"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="nameOfDoctor" defaultValue={medicalInfo?.doctor_name}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Doctor's Name"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="doctorContactNumber" defaultValue={medicalInfo?.doctor_phone}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Doctor's Contact Number/Tel"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalCondition" defaultValue={medicalInfo?.medical_condition}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Condition"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="specialProblems" defaultValue={medicalInfo?.special_problems}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Special Problems Requiring Counseling"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Receive Social Grant? : </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="receivingSocialGrant" id="yes" /*onChange={handleChange}*/
                                className="sm:ml-2" defaultValue="yes" checked={medicalInfo?.receiving_social_grant === "yes"}
                            />
                            <label htmlFor="yes" className="ml-1">Yes</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="receivingSocialGrant" id="no" /*onChange={handleChange}*/
                                className="sm:ml-2" defaultValue="no" checked={medicalInfo?.receiving_social_grant === "no"}
                            />
                            <label htmlFor="no" className="ml-1">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-5 mt-3 lg:m-0">
                <label>Dexterity of Learner : </label>
                <div className='ml-1 sm:flex mt-2 lg:m-0'>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="left-handed" /*onChange={handleChange}*/
                            className="sm:ml-2" defaultValue="left-handed" checked={medicalInfo?.dexterity_of_learner === "left-handed"}
                        />
                        <label htmlFor="left-handed" className="ml-1">Left-Handed</label>
                    </div>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="right-handed" /*onChange={handleChange}*/
                            className="sm:ml-2" defaultValue="right-handed" checked={medicalInfo?.dexterity_of_learner === "right-handed"}
                        />
                        <label htmlFor="right-handed" className="ml-1">Right-Handed</label>
                    </div>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="ambidextrous" /*onChange={handleChange}*/
                            className="sm:ml-2" defaultValue="ambidextrous" checked={medicalInfo?.dexterity_of_learner === "ambidextrous"}
                        />
                        <label htmlFor="ambidextrous" className="ml-1">Ambidextrous</label>
                    </div>
                </div>
            </div>
        </div>
    )
}