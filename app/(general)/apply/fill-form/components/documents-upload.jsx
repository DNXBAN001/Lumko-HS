

export default function DocumentsUpload(){

    return(
        <div className="mt-12">
            <h3 className="text-black font-semibold">Upload documents </h3>
            <div className="">
                <div className="flex mt-8">
                    <p>Learner's birth certificate</p>
                    <button className="bg-gray-300 px-5 py-1 rounded-md ml-12">upload</button>
                </div>
                <div className="flex mt-8">
                    <p>Mother/Guadian ID</p>
                    <button className="bg-gray-300 px-5 py-1 rounded-md ml-12">upload</button>
                </div>
            </div>
            <div className="">
                <div className="flex mt-8">
                    <p>Learner latest report</p>
                    <button className="bg-gray-300 px-5 py-1 rounded-md ml-12">upload</button>
                </div>
                <div className="flex mt-8">
                    <p>Proof of residence</p>
                    <button className="bg-gray-300 px-5 py-1 rounded-md ml-12">upload</button>
                </div>
            </div>
            <div className="">
                <div className="flex mt-8"> 
                    <p>Learner face photo</p>
                    <button className="bg-gray-300 px-5 py-1 rounded-md ml-12">upload</button>
                </div>
            </div>
        </div>
    )
}