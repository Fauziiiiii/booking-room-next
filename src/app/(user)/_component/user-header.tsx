/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react'
import { NavUser } from './nav-user'
import meetRoom1 from "../../../public/img/meet-room-1.jpg"
import { InputWithIcon } from '@/components/ui/input-with-icon'
import { FiSearch, FiUserPlus } from "react-icons/fi";
import DrawerDialogDemo from '@/components/ui/drawer-dialog-responsive'
import DatePickerDemo from '@/components/ui/date-picker'
import "@/public/css/main.css"

export default function UserHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll effect for navbar state scrolled
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            if (currentScrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header className="header-user relative w-full">
                {/* Background Image */}
                <div
                    style={{
                        backgroundImage: `url(${meetRoom1.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "auto",
                    }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        style={{
                            backgroundColor: "rgba(30, 58, 95, 0.7)",
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </div>
                
                {/* Navbar Container */}
                <div
                    className={`
                        w-full z-40 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        ${scrolled 
                            ? 'fixed shadow top-0 bg-white bg-opacity-100 animate-slide-down' 
                            : 'relative bg-transparent opacity-100'
                        }
                        ${scrollDirection === 'up' && !scrolled 
                            ? 'transition-all duration-500 ease-in-out bg-opacity-0' 
                            : ''
                        }
                    `}
                >
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center h-14 lg:h-[60px] px-4">
                        <a 
                            href="/home" 
                            className={`
                                text-xl 
                                font-bold 
                                transition-colors 
                                duration-500 
                                ${scrolled ? "text-[#1E3A5F]" : "text-white"}
                            `}
                        >
                            MeetHub
                        </a>
                        <div className="flex justify-end">
                            <nav 
                                className={`
                                    hidden 
                                    md:flex 
                                    gap-9 
                                    mr-4 
                                    py-2 
                                    transition-colors 
                                    duration-500
                                `}
                            >
                                {['Home', 'Bookings', 'Chat', 'Account'].map((item) => (
                                    <a 
                                        key={item} 
                                        href="/home" 
                                        className={`
                                            text-md 
                                            font-semibold 
                                            hover:text-teal-600 
                                            transition-colors 
                                            duration-300 
                                            ${scrolled ? "text-[#1E3A5F]" : "text-white"}
                                        `}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                            <NavUser />
                        </div>
                    </div>
                </div>
                
                {/* Title and Filter Card Container */}
                <div className="relative w-full max-w-screen-xl mx-auto mt-24 px-6 z-10 flex justify-between items-center mb-12">
                    {/* Judul dan Deskripsi */}
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-white mb-6">
                            Discover Your Ideal Meeting Space
                        </h1>
                        <p className="text-lg text-teal-100 mb-8">
                            Find and book rooms that suit your needs, in the best locations.
                        </p>
                    </div>

                    <div className="hidden md:block bg-white rounded-lg shadow-lg p-9 max-w-sm w-full ml-4">
                        <FilterCardForm/>
                    </div>
                </div>
            </header>

            {/* Mobile Filter Card - Only shown below 768px */}
            <div className="mobile-filter-card p-6 pb-4 w-full">
                <FilterCardForm/>
            </div>
        </>
    )
}

const FilterCardForm = () => {
    return(
        <form className="flex flex-col gap-4">
            <InputWithIcon
                icon={FiSearch}
                placeholder="Search..."
                className="w-full"
            />
            <DatePickerDemo />
            <InputWithIcon
                icon={FiUserPlus}
                placeholder="Number of Attendees"
                type="number"
            />
            <DrawerDialogDemo />
        </form>
    );
}

function FixedNavbarContainer() {
    return (
        <div className="max-w-screen-xl mx-auto relative flex justify-between items-center h-14 lg:h-[60px] px-4 mt-3 z-10">
            <div className="flex items-center gap-2">
            {/* Logo Project */}
            <a
                href="/home"
                className="text-xl font-bold text-teal-50 transition-colors duration-200 hover:text-teal-300"
            >
                MeetHub
            </a>
            </div>

            <div className="flex items-center gap-4">
                <nav aria-label="Breadcrumb" className="hidden md:flex gap-9 mr-4">
                    <a
                        href="#"
                        className="text-md font-semibold text-white transition-colors duration-200 hover:text-[#A0C4FF]"
                    >
                        Home
                    </a>
                    <a
                    href="#"
                    className="text-md font-semibold text-white transition-colors duration-200 hover:text-[#A0C4FF]"
                    >
                    Bookings
                    </a>
                    <a
                    href="#"
                    className="text-md font-semibold text-white transition-colors duration-200 hover:text-[#A0C4FF]"
                    >
                    Chat
                    </a>
                    <a
                    href="#"
                    className="text-md font-semibold text-white transition-colors duration-200 hover:text-[#A0C4FF]"
                    >
                    Account
                    </a>
                </nav>
                <NavUser />
            </div>
        </div>
    )
}