import Subject from "./components/subject"

export default function PastPapers() {

    
    return (
        <div className="exams-container mt-12 w-full px-2 md:w-4/5 mx-auto min-h-screen">
            <div className='flex text-center'>
                <p className="font-semibold">Find Past Examination Papers</p>
            </div>
            <div className="mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Accounting" p1Id={1} p1MemoId={2} p2Id={3} p2MemoId={4}/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Agricultural Sciences" p1Id={5} p1MemoId={6} p2Id={7} p2MemoId={8}/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Economics" p1Id={9} p1MemoId={10} p2Id={11} p2MemoId={12}/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Geography" p1Id={13} p1MemoId={14} p2Id={15} p2MemoId={16}/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="History" p1Id={17} p1MemoId={18} p2Id={19} p2MemoId={20}/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Life Sciences" p1Id={21} p1MemoId={22} p2Id={23} p2MemoId={24}/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Mathematical Literacy" p1Id={25} p1MemoId={26} p2Id={27} p2MemoId={28}/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Mathematics" p1Id={29} p1MemoId={30} p2Id={31} p2MemoId={32}/>
                </div>
            </div>
            <div className="mt-2 md:mt-12 mb-12 md:flex">
                <div className="w-full">
                    <Subject subjectName="Physical Sciences" p1Id={33} p1MemoId={34} p2Id={35} p2MemoId={36}/>
                </div>
                <div className="mt-2 md:mt-0 w-full">
                    <Subject subjectName="Tourism" p1Id={37} p1MemoId={38} p2Id={39} p2MemoId={40}/>
                </div>
            </div>
        </div>
    )
}
