"use client"

import React from 'react';
import { subjects } from "@/utils/subjects";
import { useGlobalContext } from '@/utils/context';

export default function ApplicantInfo() {

  const { setApplicationInfo } = useGlobalContext()

  const [learnerInfo, setLearnerInfo] = React.useState({
    firstName: "", lastName: "", idNumber: "", dateOfBirth: "", email: "", phone: "",
    presentSchool: "", previousSchools: "", yearOfPreviousSchools: "",
    homeLanguage: "", religion: "", physicalAddress: "", otherAchievements: ""
  })
  const [marks, setMarks] = React.useState({
    english: "", afrikaans: "", isixhosa: "", mathematics: "", LO: "",
    ns: "", creativeArts: "", ems: "", ss: "", tech: "", averageMark: 0
  })

  React.useEffect(() => {
    saveLearnerInfo()
  }, [learnerInfo, marks])

  function handleChange(event){
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
    // setMarks(prevState => ({
    //   ...prevState,
    //   averageMark: getAverage(marks)
    // }))
    if(learnerInfo.firstName&&learnerInfo.lastName&&learnerInfo.idNumber&&learnerInfo.dateOfBirth
      &&learnerInfo.phone&&learnerInfo.presentSchool&&learnerInfo.homeLanguage&&learnerInfo.religion
      &&learnerInfo.physicalAddress){
      setApplicationInfo(prevState => ({
        ...prevState, 
        learnerInfo: learnerInfo//verify if this works
      }))
    }
    if(marks.english&&(marks.afrikaans||marks.isixhosa)&&marks.mathematics&&marks.LO
    &&marks.ns&&marks.ems&&marks.ss&&marks.tech){
      setApplicationInfo(prevState => ({
        ...prevState,
        marks: marks//verify if this works
      }))
    }
  }
  // function getAverage(marks){
  //   let result = 0
  //   if(!marks.afrikaans){
  //     result = (marks.english+marks.isixhosa+marks.mathematics+marks.LO+
  //       marks.ns+marks.creativeArts+marks.ems+marks.ss+marks.tech)/9
  //   }else if(!marks.isixhosa){
  //     result = (marks.english+marks.isixhosa+marks.mathematics+marks.LO+
  //       marks.ns+marks.creativeArts+marks.ems+marks.ss+marks.tech)/9
  //   }
  //   return result
  // }

  const subjectsContent = (
      subjects.map(subject => (
        <div key={subject.id} className="mt-3 flex">
          <div className="w-4/5 sm:w-2/5"><label>{subject.name}</label></div>
          <div className="">
            <input type="text" name={subject.id} placeholder='%' onChange={handleMarks} className='subject-mark w-14 p-1' />
          </div>
        </div>
      ))
  )

  return (
      <div className="mt-12">
        <h3 className="text-black font-semibold">Applicant Information</h3>
        <div className="learner-names md:mt-5 md:flex ">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="firstName" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner name"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="lastName" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Learner surname"
            />
          </div>
        </div>
        <div className="birth-details md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="idNumber" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="ID Number"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="dateOfBirth" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
        <div className="learner-contacts md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="email" onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Email"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="phone" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Cell number"
            />
          </div>
        </div>
        <div className="learner-schools md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="presentSchool" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Present school"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="previousSchools" onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Previous schools"
            />
          </div>
          <div className="input-wrapper w-1/2 mt-3 md:m-0">
            <input type="text" name="yearOfPreviousSchools" onChange={handleChange}
              className="bg-gray-100 w-3/6 px-3 p-2" placeholder="Year attended previous school"
            />
          </div>
        </div>
        <div className="language-religion md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="homeLanguage" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Home language"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <input type="text" name="religion" required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Religion"
            />
          </div>
        </div>
        <div className="address-achievements md:mt-4 md:flex">
          <div className="input-wrapper w-full mt-3 md:m-0">
            <textarea name="physicalAddress" rows={5} required onChange={handleChange}
              className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
            />
          </div>
          <div className="input-wrapper w-full mt-3 md:m-0">
            <textarea name="otherAchievements" rows={5} onChange={handleChange}
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
