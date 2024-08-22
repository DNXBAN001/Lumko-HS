

export default function FatherInfo(props) {


    return (
        <div className="mt-12">
            <h3 className="text-black font-semibold">Parents Information</h3>
            <h3 className="mt-4 text-black font-semibold">Father Info</h3>
            <div className="mt-5">
                <input id="title" name="title" value={props.title}
                    className="bg-gray-100 w-3/5 md:w-1/5 px-3 p-2"
                />
            </div>
            <div className="guardian-names lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="firstName" value={props.firstName}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father name"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="lastName" value={props.lastName}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father surname"
                    />
                </div>
            </div>
            <div className="idNumber-relationship lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="idNumber" value={props.idNumber}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Father ID number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Marital Status: </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="fatherMaritalStatus" id="single" /* onChange={handleChange}*/
                                className="sm:ml-2" /*value="single" checked={formData.motherMaritalStatus === "single"}*/
                            />
                            <label htmlFor="single" className="ml-1">Single</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="fatherMaritalStatus" id="married" /*onChange={handleChange}*/
                                className="sm:ml-3" /*value="married" checked={formData.motherMaritalStatus === "married"}*/
                            />
                            <label htmlFor="married" className="ml-1">Married</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="fatherMaritalStatus" id="widow" /*onChange={handleChange}*/
                                className="sm:ml-3" /*value="widow" checked={formData.motherMaritalStatus === "widow"} */
                            />
                            <label htmlFor="widow" className="ml-1">Widow</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="fatherMaritalStatus" id="divorced"/*onChange={handleChange}*/
                                className="sm:ml-3" /*value="divorced" checked={formData.motherMaritalStatus === "divorced"} */
                            />
                            <label htmlFor="divorced" className="ml-1">Divorced</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-phone lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="email" value={props.email}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian email"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="phone" value={props.phone}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Mother/Guardian phone"
                    />
                </div>
            </div>
            <div className="occupation-employer lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="occupation" value={props.occupation}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Occupation"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="employer" value={props.employer}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Name of Company/ Employer"
                    />
                </div>
            </div>
            <div className="address-achievements lg:mt-4 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="physicalAddress" rows={5} value={props.physicalAddress}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Physical Address"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <textarea name="postalAddress" rows={5} value={props.postalAddress}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Postal Address"
                    />
                </div>
            </div>
        </div>
    )
}
