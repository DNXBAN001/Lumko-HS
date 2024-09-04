
import Link from "next/link"
import { getSession } from "@/utils/lib/session"
import ViewBy from "./components/applications-view"
import ApplicationsView from "./components/applications-view";

export default async function ViewApplications() {

    const user = await getSession()
    if(!user){
        return (<h1 className="text-center">Unauthorized to access this page. 
             <Link href="/sign-in" className="text-blue-600">Try Login</Link>
            </h1>)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold">Applications Received</h1>
            <ApplicationsView />
        </div>
    )
}
