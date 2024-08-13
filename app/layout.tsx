import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { MuseoModerno } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
// const museoModerno = MuseoModerno({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lumko High School",
  description: "Created by Lumko High School, for Lumko High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
