"use client"

import React from "react";
import { subjects } from "@/utils/subjects";
import { getLearnerInfo, getLearnerMarks } from "@/utils/lib/db-queries.ts"

export default function ApplicantInfo(props) {
  
    const [applicantInfo, setApplicantInfo] = React.useState()
    const [learnerMarks, setLearnerMarks] = React.useState([])

    React.useEffect(() => {
      async function getApplicantInfo(){
          const res = await getLearnerInfo(props.applicantID)
          setApplicantInfo(res[0])
      }
      async function getLearnerMarksInfo(){
        const res = await getLearnerMarks(props.applicantID)
        setLearnerMarks(res)
      }
      getApplicantInfo()
      getLearnerMarksInfo()
    }, [])

    React.useEffect(() => {
        // console.log(learnerMarks)
    }, [learnerMarks])


    const subjectsContent = learnerMarks.length > 0 ? (
        subjects.map(subject => {
          return (
            <div key={subject.id} className="mt-3 flex">
              <div className="w-4/5 sm:w-2/5"><label>{subject.name}</label></div>
              <div className=""><input type="text" name={subject.id} placeholder='%' defaultValue={learnerMarks[0][subject.dbName]}
              className='subject-mark w-14 p-1' /></div>
            </div>
          )}
        )
    ): <p className="mt-3 flex">Loading learner latest marks...</p>

    return (
        <div className="mt-12">
          <h3 className="text-black font-semibold">Applicant Information</h3>
          <div className="learner-names md:mt-5 md:flex ">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="firstName" defaultValue={applicantInfo?.firstname}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner name"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="lastName" defaultValue={applicantInfo?.lastname}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner surname"
              />
            </div>
          </div>
          <div className="birth-details md:mt-4 md:flex">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="idNumber" defaultValue={applicantInfo?.id_number}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="ID Number"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="dob" defaultValue={applicantInfo?.dob}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="learner-contacts md:mt-4 md:flex">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="email" defaultValue={applicantInfo?.email}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Email"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="phone" defaultValue={applicantInfo?.phone}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Cell number"
              />
            </div>
          </div>
          <div className="learner-schools md:mt-4 md:flex">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="presentSchool" defaultValue={applicantInfo?.present_school}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Present school"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="previousSchools" defaultValue={applicantInfo?.previous_schools}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Previous schools"
              />
            </div>
            <div className="input-wrapper w-1/2 mt-3 md:m-0">
              <input type="text" name="previousSchoolsYear" defaultValue={applicantInfo?.year_of_previousSchools}
                className="bg-gray-100 w-3/6 px-3 p-2" placeholder="Year attended previous school"
              />
            </div>
          </div>
          <div className="language-religion md:mt-4 md:flex">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="language" defaultValue={applicantInfo?.home_language}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Home language"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <input type="text" name="religion" defaultValue={applicantInfo?.religion}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Religion"
              />
            </div>
          </div>
          <div className="address-achievements md:mt-4 md:flex">
            <div className="input-wrapper w-full mt-3 md:m-0">
              <textarea name="physicalAddress" rows={5} defaultValue={applicantInfo?.physical_address}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
              />
            </div>
            <div className="input-wrapper w-full mt-3 md:m-0">
              <textarea name="otherAchievements" rows={5} defaultValue={applicantInfo?.other_achievements}
                className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Sports and Cultural Highlights Achieved"
              />
            </div>
          </div>
          <div className='mt-6'>
            <h3 className="text-black font-semibold mb-10">Latest report marks</h3>
            {subjectsContent}
          </div>
        </div>
    )
}
