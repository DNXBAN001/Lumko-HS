"use client"

import React from 'react'
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';

export default function Subject(props) {

    const [toggleSubject, setToggleSubject] = React.useState(false)
    const [toggleYear, setToggleYear] = React.useState(false)

    React.useEffect(() => {
        console.log(toggleSubject)
    }, [toggleSubject])

    function handleSubjectSelected(){
        setToggleSubject(prevState => !prevState)
    }
    function handleYearSelected(){
        setToggleYear(prevState => !prevState)
    }

    return (
        <div className="subject w-full md:w-4/5">
            <div className="bg-slate-300 cursor-pointer pl-2 py-2 pr-3 flex items-center justify-between" 
                onClick={() => handleSubjectSelected()}>
                <p className="">{props.subjectName}</p>
                {toggleSubject ? <RiArrowDownSLine size={25} />: <RiArrowRightSLine size={23} />}
            </div>
            {toggleSubject ? (
                <div className="mt-2">
                    <div className="bg-slate-300 cursor-pointer pl-2 py-2 pr-3 w-48 ml-3 flex items-center justify-between" 
                        onClick={() => handleYearSelected()}>
                        <p className="">2023 - November</p>
                        {toggleYear ? <RiArrowDownSLine size={25} />: <RiArrowRightSLine size={23} />}
                    </div>
                    {toggleYear ? (
                        <div className="mt-3 ml-8">
                            <div className="flex">
                                <p className='text-blue-600'>
                                    <Link href={`/past-papers/${props.p1Id}`}>Paper 1</Link>
                                </p>
                                <p className="ml-20 text-blue-600">
                                    <Link href={`/past-papers/${props.p1MemoId}`}>Memorandum</Link>
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <p className='text-blue-600'>
                                    <Link href={`/past-papers/${props.p2Id}`}>Paper 2</Link>
                                </p>
                                <p className="ml-20 text-blue-600">
                                    <Link href={`/past-papers/${props.p2MemoId}`}>Memorandum</Link>
                                </p>
                            </div>
                        </div>):<p></p>
                    }
                </div>):<p></p>
            }
        </div>
    )
}
