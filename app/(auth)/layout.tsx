import type { Metadata } from "next";
import Navbar from "../(general)/components/Navbar";
import Footer from "../(general)/components/Footer";


export const metadata: Metadata = {
  title: "Lumko High School - Auth",
  description: "Login",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
