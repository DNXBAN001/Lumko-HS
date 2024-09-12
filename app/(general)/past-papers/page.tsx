import Subject from "./components/subject"
import { papers } from "@/utils/lib/papers"

export default function PastPapers() {

    
    return (
        <div className="exams-container mt-12 w-full px-2 md:w-4/5 mx-auto min-h-screen">
            <div className='flex text-center'>
                <p className="font-semibold">Find Past Examination Papers</p>
            </div>
            <div className="mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Accounting"/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Agriculture"/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Economics"/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Geography"/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="History"/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Life Sciences"/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Mathematical Literacy"/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Mathematics"/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 mb-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Physical Sciences"/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Tourism"/>
                </div>
            </div>
        </div>
    )
}
