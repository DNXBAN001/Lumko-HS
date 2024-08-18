import React from 'react';
import { subjects } from "@/utils/subjects";

export default function ApplicantInfo() {

    const subjectsContent = (
        subjects.map(subject => (
          <div key={subject.id} className="mt-3 flex">
            <div className="w-4/5 sm:w-2/5"><label>{subject.name}</label></div>
            <div className=""><input type="text" name={subject.id} placeholder='%' className='subject-mark w-14 p-1' /></div>
          </div>
        ))
      )

    return (
        <div className="mt-12">
          <h3 className="text-black font-semibold">Applicant Information</h3>
          <div className="learner-names mt-5 flex ">
            <div className="input-wrapper w-full">
              <input type="text" name="firstName" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Learner name"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="lastName" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Learner surname"
                />
            </div>
          </div>
          <div className="birth-details mt-4 flex">
            <div className="input-wrapper w-full">
              <input type="text" name="idNumber" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="ID Number"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="dob" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="dd/mm/yyyy"
                />
            </div>
          </div>
          <div className="learner-contacts mt-4 flex">
            <div className="input-wrapper w-full">
              <input type="text" name="email" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Email"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="phone" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Cell number"
                />
            </div>
          </div>
          <div className="learner-schools mt-4 flex">
            <div className="input-wrapper w-full">
              <input type="text" name="presentSchool" required 
                className="bg-gray-100 w-5/6 px-3 p-2" placeholder="Present school"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="previousSchools" required 
                className="bg-gray-100 w-5/6 px-3 p-2" placeholder="Previous schools"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="previousSchoolsYear" required 
                className="bg-gray-100 w-4/6 px-3 p-2" placeholder="Year attended previous school"
                />
            </div>
          </div>
          <div className="language-religion mt-4 flex">
            <div className="input-wrapper w-full">
              <input type="text" name="language" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Home language"
                />
            </div>
            <div className="input-wrapper w-full">
              <input type="text" name="religion" required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Religion"
                />
            </div>
          </div>
          <div className="address-achievements mt-4 flex">
            <div className="input-wrapper w-full">
              <textarea name="physicalAddress" rows={5} required 
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Physical Address"
              />
            </div>
            <div className="input-wrapper w-full">
              <textarea name="otherAchievements" rows={5}
                className="bg-gray-100 w-4/5 px-3 p-2" placeholder="Sports and Cultural Highlights Achieved"
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
