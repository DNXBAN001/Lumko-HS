

export default function AdmissionsInfo(){

    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-semibold lg:ml-10">Admissions Info</h1>
            </div>
            <div className="mt-12 lg:ml-10">
                <div className="flex">
                    <p className="font-semibold">Open applications?</p>
                    <div className="ml-8">
                        <input id="yes" name="openApplications" type="radio"/>
                        <label htmlFor="yes" className="ml-2">Yes</label>
                    </div>
                    <div className="ml-4">
                        <input id="no" name="openApplications" type="radio"/>
                        <label htmlFor="no" className="ml-2">No</label>
                    </div>
                </div>
                <div className="mt-8 lg:flex">
                    <div className="opening-closing-date flex items-center w-full lg:w-auto">
                        <p>Opening date</p>
                        <input name="openingDate" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy"/>
                    </div>
                    <div className="opening-closing-date flex items-center mt-8 w-full lg:w-auto lg:mt-0">
                        <p className="lg:ml-12">Closing date</p>
                        <input name="closingDate" type="text" className="bg-gray-100 w-32 px-3 p-2 ml-8"
                        placeholder="dd/mm/yyyy"/>
                    </div>
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 8 ?</p>
                    <input name="grade-8-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 8 classes do you have in total ?</p>
                    <input name="grade-8-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 9 ?</p>
                    <input name="grade-9-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 9 classes do you have in total ?</p>
                    <input name="grade-9-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 10?</p>
                    <input name="grade-10-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 10 classes do you have in total?</p>
                    <input name="grade-10-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
            </div>
            <div className="mt-12 lg:flex lg:justify-around">
                <div className="flex items-center">
                    <p>How many applications are you accepting for Grade 11?</p>
                    <input name="grade-11-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
                <div className="flex items-center mt-6 lg:mt-0">
                    <p>How many Grade 11 classes do you have in total?</p>
                    <input name="grade-11-applications" type="text" className="bg-gray-100 w-20 px-3 p-2 ml-8"
                    placeholder="?" />
                </div>
            </div>
        </div>
    )
}