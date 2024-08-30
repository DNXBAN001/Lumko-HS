
import { elPrimarySchools } from "@/utils/lib/primary-schools-el";
import { applications } from "@/utils/lib/placeholder-data";


export default function AdminOverview() {

    const totalApplications = applications.length


    const applicationsRecords = applications.map(application => {
        return(
            <tr className="" key={application.learnerInfo.email}>
                <td className="px-3 py-2">{application.learnerInfo.presentSchool}</td>
                <td className="px-3 py-2 text-center">1</td>
            </tr>
        )
    })

    return (
        <div>
             <div>
                <h1 className="text-2xl font-semibold">Applications / Overview</h1>
            </div>
            <div className="flex">
                <div className="mt-12">
                    <div className="bg-gray-100 w-80 h-52 rounded-lg flex flex-col justify-between text-end p-12">
                        <h3 className="text-2xl text-red-900 font-semibold">Total Applications</h3>
                        <p className="text-xl">{totalApplications}</p>
                    </div>
                    <div className="bg-gray-100 p-12 mt-12">
                        <div>
                            <h3 className="text-2xl text-red-900 font-semibold">Applications by Grade/Class</h3>
                        </div>
                        <div className="mt-12">
                            <table className="applications-by-class-table">
                                <thead className="text-left">
                                    <tr className="">
                                        <th className="px-3 py-4">Class/Grade</th>
                                        <th className="px-3 py-4">No. of Applications Received</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="px-3 py-2">Grade 8</td>
                                        <td className="px-3 py-2 text-center">400</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 9</td>
                                        <td className="px-3 py-2 text-center">80</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 10A</td>
                                        <td className="px-3 py-2 text-center">6</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 10B</td>
                                        <td className="px-3 py-2 text-center">10</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 10C</td>
                                        <td className="px-3 py-2 text-center">17</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 11A</td>
                                        <td className="px-3 py-2 text-center">4</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 11B</td>
                                        <td className="px-3 py-2 text-center">9</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Grade 11C</td>
                                        <td className="px-3 py-2 text-center">13</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 mt-12 w-3/5 ml-12 p-12 rounded-lg ">
                    <div>
                        <h3 className="text-2xl text-red-900 font-semibold">Applications by Schools</h3>
                    </div>
                    <div className="mt-12">
                        <table className="applications-by-school-table">
                            <thead className="text-left">
                                <tr className="">
                                    <th className="px-3 py-4">School Name</th>
                                    <th className="px-3 py-4">No. of Applications Received</th>
                                </tr>
                            </thead>
                            <tbody className="">
                               {applicationsRecords}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
