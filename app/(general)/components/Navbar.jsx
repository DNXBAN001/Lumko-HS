"use client"

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";
import { Roboto_Serif } from "next/font/google";
import { useGlobalContext } from "@/utils/context";
import { useRouter } from "next/navigation";

const roboto_serif = Roboto_Serif({ 
    subsets: ["latin"],
    // display: "swap"
   })

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const pathname = usePathname()
    const [moreDropdown, setMoreDropdown] = React.useState(false)
    const { isLoggedIn, setIsLoggedIn } = useGlobalContext()
    const router = useRouter()

    React.useEffect(()=> {
        console.log(toggleMenu)
    }, [toggleMenu])

    
    async function handleLogout(event){
        event.preventDefault()
        try{
            const res = await fetch("/api/logout", {
                method: "GET",
            }).then(result => result.json())
            if(res.success){
                console.log(res.message)
                setIsLoggedIn(false)
                router.push("/sign-in")
            }else{
                alert(res.message)
            }
        }catch(err){
            alert("Error while trying to logout!")
        }
    }
    
    const LeftMenuLinks = (
        <>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/' ? 'focus' : ''} `} href="/">HOME</Link></p>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/about' ? 'focus' : ''} `} 
                href="/about">ABOUT</Link></p>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/admissions' ? 'active' : ''}`} 
                href="/admissions">ADMISSIONS</Link></p>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link  className={`link hover:text-red-700 ${pathname === '/gallery' ? 'active' : ''} `} 
                href="/gallery">GALLERY</Link></p>
        </>
    )
    const RightMenuLinks = (
        <>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2"
             onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/news' ? 'active' : ''} `} 
                href="/news">NEWS</Link></p>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/staff' ? 'active' : ''}`} 
                href="/staff">STAFF</Link></p>
            <p className="menu-link w-full md:w-auto text-center font-semibold py-2" 
            onClick={() => setToggleMenu(prevState => !prevState)}>
                <Link className={`link hover:text-red-700 ${pathname === '/contact' ? 'active' : ''}`} 
                href="/contact">CONTACT US</Link></p>
            <div className="dropdown w-full md:w-auto">
                <button className="more-button w-full md:w-auto text-center font-semibold lg:text-left py-2
                 hover:text-red-700" onClick={() => setMoreDropdown(prevState => !prevState)}>MORE</button>
                <div className={`dropdown-menu bg-blue-950 ${moreDropdown ? 'lg:block': 'lg:hidden'}`}>
                    <p className="more-links w-full md:w-auto text-center font-semibold py-2" onClick={() => {
                        setToggleMenu(prevState => !prevState)
                        }}>
                        <Link className={`link hover:text-red-700 ${pathname === '/past-papers' ? 'active' : ''}`} 
                        href="/past-papers">PAST PAPERS</Link>
                    </p>
                    {isLoggedIn ? (<p className="cursor-pointer w-full md:w-auto text-center font-semibold pt-2 pb-3" 
                    onClick={handleLogout}>LOGOUT</p>): 
                    (<p className="more-links w-full md:w-auto text-center font-semibold pt-2 pb-3" onClick={() => {
                        setToggleMenu(prevState => !prevState)}
                        }>
                        <Link className={`link hover:text-red-700 ${pathname === '/sign-in' ? 'active' : ''} `} 
                        href="/sign-in">SIGN IN</Link>
                    </p>)}
                </div>
                
            </div>
            
        </>
    )
//${roboto_serif.className} font-serif
    return (
        <nav className={`navbar-container font-serif text-sm bg-blue-950 p-5 sticky w-full top-0 `}>
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
