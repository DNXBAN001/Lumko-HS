

export default function ApplicationsBySchools() {
    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold">Applications / Overview</h1>
            </div>
            <div className="flex">
                <div className="mt-12 bg-gray-100 w-80 h-52 rounded-lg flex flex-col justify-between text-end p-12">
                    <h3 className="text-2xl text-black font-semibold">Total Applications</h3>
                    <p>400</p>
                </div>
                <div className="bg-gray-100 mt-12 w-3/5 ml-12 p-12 rounded-lg ">
                    <div>
                        <h3 className="text-2xl text-red-900 font-semibold">Applications by Schools</h3>
                    </div>
                    <div className="mt-12">
                        <table className="applications-by-school-table w-full">
                            <thead className="text-left">
                                <tr className="">
                                    <th className="px-3 py-4">School Name</th>
                                    <th className="px-3 py-4">No. of Applications Received</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr /*key={application.id}*/>
                                    <td className="p-3">
                                        Nompumelelo Primary School
                                        {/*<Link href={"/exercises/update/"+exercise._id}>edit</Link> | <a href="#" onClick={() => deleteExercise(exercise._id)}>delete</a>*/}
                                    </td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">Nyathi Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3"> Nontuthuzelo Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">Makinana Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">Lujiza Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">DV Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">DV Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">DV Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                                <tr /*key={application.id}*/>
                                    <td className="p-3">DV Primary School</td>
                                    <td className="p-3">50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
