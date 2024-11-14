import Link from 'next/link';
import { LuSearch, LuArrowLeft } from 'react-icons/lu';

export default function UserRoomCardSearch() {
    return (
        <div className="main-room-search-container w-full max-w-screen-xl mx-auto mb-1 md:mb-5 md:px-4">
            {/* Desktop Version (md and above) */}
            <div className="hidden md:flex flex-row items-center w-full shadow-md bg-white border border-slate-200 h-14 rounded-md py-2 px-4 space-y-0">
                <div className="main-room-search-content flex flex-wrap h-full items-center gap-2 sm:gap-4 w-full sm:w-auto">
                    <div className="icon-search w-6">
                        <LuSearch size={16} />
                    </div>
                    <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                        <span className="text-base font-semibold">Jakarta</span>
                    </div>
                    <div className="divider-vertical mx-4">
                        <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
                    </div>
                    <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                        <span className="text-base font-semibold">Jum, 08 Nov 2024 - Sab, 09 Nov 2024 (1 malam)</span>
                    </div>
                    <div className="divider-vertical mx-4">
                        <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
                    </div>
                    <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                        <span className="text-base font-semibold">1 Attendees</span>
                    </div>
                </div>
                <div className="main-room-filter-button flex h-full items-center justify-center min-w-24 bg-[#e8ebef] rounded-md ml-auto text-[#1e3a5f]">
                    <button className="text-base font-semibold">Search</button>
                </div>
            </div>

            {/* Mobile Version (below md) */}
            <div className="md:hidden bg-white p-4 ">
                <div className="flex items-center justify-between">
                    {/* Back Button */}
                    <button className="text-[#1e3a5f]">
                        <Link href={"/home"}>
                            <LuArrowLeft size={20} />
                        </Link>
                    </button>

                    {/* Search Content */}
                    <div className="flex-1 ml-2 space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-[#1e3a5f]">Jakarta</span>
                        </div>
                        <div className="text-xs text-slate-600">
                            08 Nov - 09 Nov • 1 Attendees
                        </div>
                    </div>

                    {/* Edit Button */}
                    <button
                        className="flex items-center gap-1 px-3 py-2 bg-[#e8ebef] text-[#1e3a5f] rounded-lg"
                        onClick={() => console.log('Open drawer')}
                    >
                        <span className="text-xs font-semibold">Change</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
