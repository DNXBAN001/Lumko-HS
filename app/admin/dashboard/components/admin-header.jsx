import Image from "next/image"

export default function AdminHeader() {
    return (
        <div className="admin-header-container bg-white flex justify-between items-center py-4">
            <div className="flex items-center">
                <Image src="/logo-large.png" width={100} height={100} alt="logo-img" />
                <h1 className="text-3xl font-semibold ml-12">Admin / Dashboard</h1>
            </div>
            <div className="mr-3">
                <p>You are signed in as: <span className="font-semibold">Admin</span></p>
            </div>
        </div>
    )
}
