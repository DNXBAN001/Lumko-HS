"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LeftSidebar() {

    const router = useRouter()

    async function handleLogout(event){
        event.preventDefault()
        try{
            const res = await fetch("/api/logout", {
                method: "GET",
            }).then(result => result.json())
            if(res.success){
                console.log(res.message)
                router.push("/sign-in")
            }else{
                alert(res.message)
            }
        }catch(err){
            alert("Error while trying to logout...")
        }
    }

    return (
        <div className="left-sidebar h-4/5 bg-gray-100">
            <Link href="/admin/dashboard" className="admin-view">
                <div className="category mx-3 p-3 mt-10 hover:bg-red-900 hover:text-white">
                    <p className="text-lg font-semibold">Overview</p>
                </div>
            </Link>
            <Link href="/admin/dashboard/view-applications" 
                    className="admin-view">
                <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white ">
                    <p className="text-lg font-semibold">View Applications</p>
                </div>
            </Link>
            <Link href="/admin/dashboard/admissions-info" className="admin-view">
                <div className="category mx-3 p-3 hover:bg-red-900 hover:text-white">
                    <p className="text-lg font-semibold">Settings</p>
                </div>
            </Link>
            <div className="category logout-button cursor-pointer mx-3 p-3 rounded-md hover:bg-red-900 hover:text-white"
                onClick={handleLogout}>
                <p>Sign Out</p>
            </div>
        </div>
    )
}
