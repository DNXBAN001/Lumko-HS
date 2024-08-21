import ApplicationsTable from "./components/applications-table"

export default function AdminDashboard() {


    return (
        <div>
            <h1 className="text-2xl font-semibold">Applications Received</h1>
            <ApplicationsTable />
        </div>
    )
}
