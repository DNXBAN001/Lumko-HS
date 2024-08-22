

export default function MedicalInfo(props) {

    return (
        <div className="mt-12">
            <h3 className="text-black font-semibold">Learner Medical Information</h3>
            <div className="mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidNumber" value={props.medicalAidNumber}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Number"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidName" value={props.medicalAidName}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Name"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalAidMainMember" value={props.medicalAidMainMember}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Aid Main Member"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="nameOfDoctor" value={props.nameOfDoctor}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Doctor's Name"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-4 lg:m-0">
                    <input type="email" name="doctorContactNumber" value={props.doctorContactNumber}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Doctor's Contact Number/Tel"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="medicalCondition" value={props.medicalCondition}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Medical Condition"
                    />
                </div>
            </div>
            <div className="lg:mt-5 lg:flex">
                <div className="input-wrapper w-full mt-3 lg:m-0">
                    <input type="text" name="specialProblems" value={props.specialProblems}
                        className="bg-gray-100 w-full sm:w-4/5 px-3 p-2" placeholder="Special Problems Requiring Counseling"
                    />
                </div>
                <div className="input-wrapper w-full mt-3 lg:m-0 lg:flex">
                    <label>Receive Social Grant? : </label>
                    <div className='ml-1 sm:flex mt-2 lg:m-0'>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="receivingSocialGrant" id="yes" /*onChange={handleChange}*/
                                className="sm:ml-2" /*value="yes" checked={formData.receivingSocialGrant === "yes"}*/
                            />
                            <label htmlFor="yes" className="ml-1">Yes</label>
                        </div>
                        <div className="pl-1 pt-1 md:p-0">
                            <input type="radio" name="receivingSocialGrant" id="no" /*onChange={handleChange}*/
                                className="sm:ml-2" /*value="no" checked={formData.receivingSocialGrant === "no"}*/
                            />
                            <label htmlFor="no" className="ml-1">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-5 mt-3 lg:m-0">
                <label>Dexterity of Learner : </label>
                <div className='ml-1 sm:flex mt-2 lg:m-0'>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="left-handed" /*onChange={handleChange}*/
                            className="sm:ml-2" /*value="left-handed" checked={formData.dexterityOfLearner === "left-handed"}*/
                        />
                        <label htmlFor="left-handed" className="ml-1">Left-Handed</label>
                    </div>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="right-handed" /*onChange={handleChange}*/
                            className="sm:ml-2" /*value="right-handed" checked={formData.dexterityOfLearner === "right-handed"}*/
                        />
                        <label htmlFor="right-handed" className="ml-1">Right-Handed</label>
                    </div>
                    <div className="pl-1 pt-1 md:p-0">
                        <input type="radio" name="dexterityOfLearner" id="ambidextrous" /*onChange={handleChange}*/
                            className="sm:ml-2" /*value="ambidextrous" checked={formData.dexterityOfLearner === "ambidextrous"}*/
                        />
                        <label htmlFor="ambidextrous" className="ml-1">Ambidextrous</label>
                    </div>
                </div>
            </div>
        </div>
    )
}