"use client"

import React from 'react';
import { redirect } from 'next/navigation';
import { subjects } from "@/utils/subjects";
import { useGlobalContext } from '@/utils/context';

export default function ApplicantInfo() {

  const { applicationInfo, gradeApplyingFor, setApplicationInfo } = useGlobalContext()

  const [learnerInfo, setLearnerInfo] = React.useState({
    firstName: "", lastName: "", idNumber: "", dateOfBirth: "", email: null, phone: "",
    presentSchool: "", previousSchools: null, yearOfPreviousSchools: null,
    homeLanguage: "", religion: "", physicalAddress: "", otherAchievements: null, 
    gradeApplyingFor: gradeApplyingFor, class: null
  })
  const [marks, setMarks] = React.useState({
    english: "", afrikaans: null, isixhosa: null, mathematics: "", LO: "", ns: "", 
    creativeArts: "", ems: "", ss: "", tech: "", averageMark: 0
  })

  //Redirect user back to /apply page to select the grade applying for if the value is null
  // if(!gradeApplyingFor){
  //   redirect("/apply")
  // }

  React.useEffect(() => {
    saveLearnerInfo()
  }, [learnerInfo, marks])

  function handleLearnerInfo(event){
    const { name, value } = event.target
    setLearnerInfo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  function handleMarks(event){
    const {name, value} = event.target
    setMarks(prevState => ({
      ...prevState,
      [name]: Number(value)
    }))
  }
  function saveLearnerInfo(){
    if(learnerInfo.firstName&&learnerInfo.lastName&&learnerInfo.idNumber&&learnerInfo.dateOfBirth
      &&learnerInfo.phone&&learnerInfo.presentSchool&&learnerInfo.homeLanguage&&learnerInfo.religion
      &&learnerInfo.physicalAddress&&learnerInfo.gradeApplyingFor){
      setApplicationInfo(prevState => ({
        ...prevState, 
        learnerInfo: learnerInfo
      }))
    }
    if(marks.english&&(marks.afrikaans||marks.isixhosa)&&marks.mathematics&&marks.LO
    &&marks.ns&&marks.ems&&marks.ss&&marks.tech){
      setApplicationInfo(prevState => ({
        ...prevState,
        marks: marks
      }))
    }
  }

  const subjectsContent = (
      subjects.map(subject => (
        <div key={subject.id} className="mt-3 flex">
          <div className="w-4/5 sm:w-2/5"><label>{subject.name}</label></div>
          <div className="">
            <input type="text" name={subject.id} placeholder='%' onChange={handleMarks} 
            className='subject-mark w-14 p-1' defaultValue={applicationInfo?.marks[subject.id]} /> 
          </div>
        </div>
      ))
  )

  return (
      <div className="mt-12">
        <h3 className="text-black font-semibold">Applicant Information</h3>
        <div className="learner-names md:mt-5 md:flex ">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="firstName" required onChange={handleLearnerInfo} 
              defaultValue={applicationInfo?.learnerInfo.firstName}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner name (required)"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="lastName" required onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.lastName}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner surname (required)"
            />
          </div>
        </div>
        <div className="birth-details md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="idNumber" required onChange={handleLearnerInfo}
            defaultValue={applicationInfo?.learnerInfo.idNumber}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="ID Number (required)"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="dateOfBirth" required onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.dateOfBirth}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="dd/mm/yyyy (required)"
            />
          </div>
        </div>
        <div className="learner-contacts md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="email" onChange={handleLearnerInfo} defaultValue={applicationInfo?.learnerInfo.email}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Email"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="phone" required onChange={handleLearnerInfo} defaultValue={applicationInfo?.learnerInfo.phone}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Cell number (required)"
            />
          </div>
        </div>
        <div className="learner-schools md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="presentSchool" required onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.presentSchool}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Present school (required)"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="previousSchools" onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.previousSchools}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Previous schools"
            />
          </div>
          <div className="input-wrapper w-1/2 mt-3 md:m-0">
            <input type="text" name="yearOfPreviousSchools" onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.yearOfPreviousSchools}
              className="bg-gray-100 w-3/6 px-3 p-2" placeholder="Year attended previous school"
            />
          </div>
        </div>
        <div className="language-religion md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="homeLanguage" required onChange={handleLearnerInfo} 
              defaultValue={applicationInfo?.learnerInfo.homeLanguage}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Home language (required)"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="religion" required onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.religion}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Religion (required)"
            />
          </div>
        </div>
        <div className="address-achievements md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <textarea name="physicalAddress" rows={5} required onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.physicalAddress}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address (required)"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <textarea name="otherAchievements" rows={5} onChange={handleLearnerInfo}
              defaultValue={applicationInfo?.learnerInfo.otherAchievements}
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
