"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {

    const pathname = usePathname()

    return (
        <div className="left-sidebar h-4/5 bg-gray-100">
            <Link href="/admin/dashboard" className={`admin-view ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
                <div className="category mx-3 p-3 mt-10 hover:bg-red-900 hover:text-white">
                    <p className="text-lg font-semibold">Overview</p>
                </div>
            </Link>
            <Link href="/admin/dashboard/view-applications" 
                    className={`admin-view ${pathname === '/admin/dashboard/view-applications' ? 'active' : ''}`}>
                <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white ">
                    <p className="text-lg font-semibold">View Applications</p>
                </div>
            </Link>
            <Link href="#" className="admin-view">
                <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white">
                    <p className="text-lg font-semibold">Settings</p>
                </div>
            </Link>
            <Link href="/sign-in" className="">
                <div className="category logout-button mx-3 p-3 rounded-md hover:bg-red-900 hover:text-white">
                    <p>Sign Out</p>
                </div>
            </Link>
        </div>
    )
}
