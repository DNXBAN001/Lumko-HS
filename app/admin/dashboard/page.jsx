import Image from "next/image"

export default function AdminDashboard() {


    return (
        <div className="mt-4 mx-4">
            <div className="admin-header-container bg-white flex justify-between items-center pb-4">
                <div className="flex items-center">
                    <Image src="/logo-large.png" width={100} height={100} alt="logo-img" />
                    <h1 className="text-3xl ml-12">Admin / Dashboard</h1>
                </div>
                <div className="mr-3">
                    <p>You are signed in as: <span className="font-semibold">Admin</span></p>
                </div>
            </div>
            <div className="w-full mt-12 flex h-screen">
                <div className="left-sidebar h-4/5 bg-gray-100">
                    <div className="category mt-10">
                        <p className="mx-3 p-3 hover:bg-red-900 hover:text-white">Overview</p>
                    </div>
                    <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white">
                        <p>View Applications</p>
                    </div>
                    <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white">
                        <p>Settings</p>
                    </div>
                    <div className="category logout-button mx-3 p-3 rounded-md hover:bg-red-900 hover:text-white">
                        <p>Sign Out</p>
                    </div>
                </div>
                <div className="main-admin-view w-4/5">
                    Main View
                </div>
            </div>
        </div>
    )
}
