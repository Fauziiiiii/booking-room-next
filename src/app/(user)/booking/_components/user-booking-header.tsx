"use client"

import "@/public/css/main.css";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserBookingHeader() {
  const router = useRouter();

  return (
    <>
    {/* Desktop Header */}
      <header className="header-user relative w-full hidden md:block">
        <div
          className={`w-full z-40 transition-all duration-500 ease-in-out relative bg-white`}
        >
          <div className="max-w-screen-xl mx-auto flex justify-between items-center h-14 px-4">
            <a
              href="/home"
              className={`text-xl font-bold transition-colors duration-500 text-[#1E3A5F] hidden md:block`}
            >
              MeetHub
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header-user fixed top-0 w-full z-50 bg-white border-b border-gray-200 md:hidden">
        <div className="max-w-screen-xl mx-auto flex items-center h-14 px-4 relative">
            <div className="flex items-center justify-center md:hidden">
                <button onClick={() => router.back()}>
                    <ChevronLeft className="text-[#1E3A5F]"/>
                </button>
            </div>

          <p className="absolute left-0 right-0 text-center text-lg font-semibold md:hidden">
            {/* <button onClick={() => router.back()}>
                Jancok
            </button> */}
            Booking
          </p>
        </div>
      </header>
    </>
  );
}
