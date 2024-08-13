"use client"

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(()=> {
        console.log(toggleMenu)
    }, [toggleMenu])

    const LeftMenuLinks = (
        <>
            <p className="menu-items">
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">HOME</Link></p>
            <p className="menu-items">
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">ABOUT</Link></p>
            <p className="menu-items">
                <Link className={`link ${pathname === '/admissions' ? 'active' : ''}`} href="/admissions">ADMISSIONS</Link></p>
            <p className="menu-items">
                <Link  className={`link ${pathname === '/gallery' ? 'active' : ''}`} href="/gallery">GALLERY</Link></p>
        </>
    )
    const RightMenuLinks = (
        <>
            <p className="menu-items">
                <Link className={`link ${pathname === '/news' ? 'active' : ''}`} href="/news">NEWS</Link></p>
            <p className="menu-items">
                <Link className={`link ${pathname === '/staff' ? 'active' : ''}`} href="/staff">STAFF</Link></p>
            <p className="menu-items">
                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">CONTACT US</Link></p>
            <p className="menu-items">
                <Link className={`link ${pathname === '/sign-in' ? 'active' : ''}`} href="/sign-in">SIGN IN</Link></p>
        </>
    )

    return (
        <nav className="navbar-container bg-blue-950 p-5 sticky w-full top-0">
            <div className="navbar flex justify-around items-center">
                {LeftMenuLinks}
                <div>
                    <Link href="/">
                        <Image src="/logo-small.png"
                            width={110}
                            height={100}
                            priority={true}
                            alt="logo"
                            className="logo-image"
                        />
                    </Link>
                </div>
                {RightMenuLinks}

                {toggleMenu ? (<div className="menu-icon-wrapper" onClick={() => setToggleMenu(prevState => !prevState)}>
                    <CloseMenu className="hamburger-menu" size={40}/>
                </div>):
                (<div className="menu-icon-wrapper" onClick={() => setToggleMenu(prevState => !prevState)}>
                    <HiMenu className="hamburger-menu" size={40}/>
                </div>)}
            </div>
            {toggleMenu ? (
                <div className="menu-items-wrapper mt-8 flex flex-col items-center">
                    {LeftMenuLinks}
                    {RightMenuLinks}
                </div>
            ): <></>}
        </nav>
    )
}
