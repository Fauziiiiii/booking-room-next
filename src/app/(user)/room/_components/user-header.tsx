import { NavUser } from './nav-user'
import "@/public/css/main.css"
import Link from 'next/link'

export default function UserRoomHeader() {
    return (
        <>
            <header className="header-user relative w-full md:block hidden">
                {/* Navbar Container */}
                <div
                    className={`
                        w-full z-40 
                        transition-all 
                        duration-500 
                        ease-in-out relative bg-white opacity-100'
                    `}
                >
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center h-14 px-4">
                        <a 
                            href="/home" 
                            className={`
                                text-xl 
                                font-bold 
                                transition-colors 
                                duration-500 
                                text-[#1E3A5F]
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
                                {['Home', 'Your Orders', 'Message'].map((item) => (
                                    <Link
                                        key={item} 
                                        href="/home" 
                                        className={`
                                            text-md 
                                            font-semibold 
                                            hover:text-teal-600 
                                            transition-colors 
                                            duration-300 
                                            text-[#1E3A5F]
                                        `}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                            <NavUser />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}