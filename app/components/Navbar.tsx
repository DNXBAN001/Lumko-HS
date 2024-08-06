"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";

export function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)

    React.useEffect(()=> {
        console.log(toggleMenu)
    }, [toggleMenu])

    const LeftMenuContent = (
        <>
            <p className="menu-items"><Link href="/">HOME</Link></p>
            <p className="menu-items"><Link href="/about">ABOUT</Link></p>
            <p className="menu-items"><Link href="/admissions">ADMISSIONS</Link></p>
            <p className="menu-items"><Link href="/gallery">GALLERY</Link></p>
        </>
    )
    const RightMenuContent = (
        <>
            <p className="menu-items"><Link href="/news">NEWS</Link></p>
            <p className="menu-items"><Link href="/alumni">ALUMNI</Link></p>
            <p className="menu-items"><Link href="/contact">CONTACT US</Link></p>
            <p className="menu-items"><Link href="/sign-in">SIGN IN</Link></p>
        </>
    )

    return (
        <nav className="navbar-container bg-blue-950 p-5 fixed w-full top-0">
            <div className="navbar flex justify-around items-center">
                {LeftMenuContent}
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
                {RightMenuContent}

                {toggleMenu ? (<div className="menu-icon-wrapper" onClick={() => setToggleMenu(prevState => !prevState)}>
                    <CloseMenu className="hamburger-menu" size={40}/>
                </div>):
                (<div className="menu-icon-wrapper" onClick={() => setToggleMenu(prevState => !prevState)}>
                    <HiMenu className="hamburger-menu" size={40}/>
                </div>)}
            </div>
            {toggleMenu ? (
                <div className="menu-items-wrapper mt-8 flex flex-col items-center">
                    {LeftMenuContent}
                    {RightMenuContent}
                </div>
            ): <></>}
        </nav>
    )
}
