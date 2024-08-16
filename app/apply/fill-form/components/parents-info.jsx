import React from 'react'

export default function ParentsInfo() {

    return (
        <div>
            <h3>Parent Information</h3>
            <div className="flex">
                <div className="mt-10 mb-12">
                    <button className="next-button bg-red-700 text-white w-28 px-2 py-2 flex justify-around items-center active">
                        <div>Previous</div> <BsArrowLeft classname=""/>
                    </button>
                </div>
                <div className="mt-10 mb-12">
                    <button className="next-button bg-red-700 text-white w-28 px-2 py-2 flex justify-around items-center active">
                        <div>Next</div> <BsArrowRight classname=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}
