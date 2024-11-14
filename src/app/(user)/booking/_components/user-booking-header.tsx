import "@/public/css/main.css"

export default function UserBookingHeader() {
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
                    </div>
                </div>
            </header>
        </>
    )
}