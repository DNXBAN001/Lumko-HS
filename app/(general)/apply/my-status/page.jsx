import { getSession } from '@/utils/lib/session'


export default async function MyStatus() {

    // const [applicationStatus, setApplicationStatus] = React.useState(null)

    const {firstName, lastName} = await getSession()
    // const user = {
    //     firstName: "Bandile",
    //     lastName: "Danxa",
    //     role: "applicant"
    // }

    return (
        <div className="mt-12 min-h-screen md:w-4/5 m-auto">
            <div><h1 className="text-xl font-semibold">Application Status: {firstName}</h1></div>
            <div className="mt-12">
                <table>
                    <thead className="">
                        <tr>
                            <th className="px-3 py-2">Full Name</th>
                            <th className="px-3 py-2">Email</th>
                            <th className="px-3 py-2">Admission Status</th>
                            <th className="px-3 py-2 hidden sm:block">Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="px-3 py-2">{firstName+" "+lastName}</td>
                            <td className="px-3 py-2">barnez76@gmail.com</td>
                            <td className="px-3 py-2">accepted</td>
                            <td className="px-3 py-2 hidden sm:block">Reached max intake</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
