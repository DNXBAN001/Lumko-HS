import React from 'react'
import Link from 'next/link'

export default function ApplicationsTable() {
    const email = ""
    return (
        <div className="mt-12">
            <table className="applications-by-school-table w-full">
                <thead className="">
                    <tr className="">
                        <th className=""></th>
                        <th className="p-4">First Name</th>
                        <th className="p-4">Last Name</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Average Mark (%)</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Class</th>
                        <th className=""></th>
                        <th className=""></th>
                        <th className=""></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr /*key={application.id}*/ className="hover:bg-gray-100">
                        <td className="p-3">1</td>
                        <td className="p-3">Simamkele</td>
                        <td className="p-3">Danxa</td>
                        <td className="p-3">sima@gmail.com</td>
                        <td className="p-3">70</td>
                        <td className="p-3">pending</td>
                        <td className="p-3">8A</td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">View</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Accept</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Reject</Link>
                        </td>
                    </tr>
                    <tr /*key={application.id}*/ className="hover:bg-gray-100">
                        <td className="p-3">2</td>
                        <td className="p-3">SimamkeleDanxa</td>
                        <td className="p-3">DanxaDanxa Danxa</td>
                        <td className="p-3">sima@gmail.com</td>
                        <td className="p-3">70</td>
                        <td className="p-3">pending</td>
                        <td className="p-3">8A</td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">View</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Accept</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Reject</Link>
                        </td>
                    </tr>
                    <tr /*key={application.id}*/ className="hover:bg-gray-100">
                        <td className="p-3">3</td>
                        <td className="p-3">Simamkele</td>
                        <td className="p-3">Danxa</td>
                        <td className="p-3">sima@gmail.com</td>
                        <td className="p-3">70</td>
                        <td className="p-3">pending</td>
                        <td className="p-3">8A</td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">View</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Accept</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Reject</Link>
                        </td>
                    </tr>
                    <tr /*key={application.id}*/ className="hover:bg-gray-100">
                        <td className="p-3">4</td>
                        <td className="p-3">Simamkele</td>
                        <td className="p-3">Danxa</td>
                        <td className="p-3">sima@gmail.com</td>
                        <td className="p-3">70</td>
                        <td className="p-3">pending</td>
                        <td className="p-3">8A</td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">View</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Accept</Link>
                        </td>
                        <td className="p-3">
                            <Link href={`/admin/dashboard/view-applications/${email}`} className="text-blue-700">Reject</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
