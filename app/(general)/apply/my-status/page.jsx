import { sql } from '@vercel/postgres'
import { getSession } from '@/utils/lib/session'
import Link from 'next/link'


async function getApplicationStatus(userId){
    "use server"
    const { rows } = await sql`SELECT status, class FROM learner_info WHERE userId=${userId}`
    if(rows.length >0){
        return rows[0]
    }
    return "No status"
}

export default async function MyStatus() {

    const {userId, firstName, lastName, email} = await getSession()

    if(!userId){
        return <p>Unauthorized to access this page. Try <Link href="/sign-in">login</Link></p>
    }
    
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
                            <th className="px-3 py-2 hidden sm:block">Class_Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="px-3 py-2">{firstName+" "+lastName}</td>
                            <td className="px-3 py-2">{email}</td>
                            <td className="px-3 py-2">{applicationStatus.status}</td>
                            <td className="px-3 py-2 hidden sm:block">{applicationStatus.class}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
