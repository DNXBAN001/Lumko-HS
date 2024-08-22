import { elPrimarySchools } from "@/utils/lib/primary-schools-el";
import { applications } from "@/utils/lib/placeholder-data";


export default function AdminOverview() {

    const totalApplications = applications.length


    const applicationsRecords = applications.map(application => {
        return(
            <tr className="" key={application.learnerInfo.email}>
                <td className="px-3 py-4">{application.learnerInfo.presentSchool}</td>
                <td className="px-3 py-4">1</td>
            </tr>
        )
    })

    return (
        <div>
             <div>
                <h1 className="text-2xl font-semibold">Applications / Overview</h1>
            </div>
            <div className="flex">
                <div className="mt-12 bg-gray-100 w-80 h-52 rounded-lg flex flex-col justify-between text-end p-12">
                    <h3 className="text-2xl text-black font-semibold">Total Applications</h3>
                    <p>{totalApplications}</p>
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
                               {applicationsRecords}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
