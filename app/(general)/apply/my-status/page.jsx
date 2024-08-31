import { getSession } from '@/utils/lib/session'
import { sql } from '@vercel/postgres'

async function getApplicationStatus(user){
    "use server"
    const { rows } = await sql`Select status from learner_info where userId=${user.userId}`
    return (rows.length >0 ? rows[0]: "No status")
}

export default async function MyStatus() {

    const {userId, firstName, lastName, email} = await getSession()
    const applicationStatus = await getApplicationStatus(userId)

    

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
                            <td className="px-3 py-2">{email}</td>
                            <td className="px-3 py-2">{applicationStatus}</td>
                            <td className="px-3 py-2 hidden sm:block">...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
