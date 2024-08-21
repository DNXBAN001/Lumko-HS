import type { Metadata } from "next";
import AdminHeader from "./components/admin-header"
import LeftSidebar from "./components/left-sidebar"


export const metadata: Metadata = {
  title: "Lumko High School",
  description: "General Page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="mt-4 mx-4">
            <AdminHeader />
            <div className="w-full mt-12 flex">
                <LeftSidebar />
                <div className="main-admin-view w-4/5">
                    {children}
                </div>
            </div>
        </div>
    );
}
