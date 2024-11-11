import React from "react";
import { Filter, ListFilter, Users, Heater, Star } from "lucide-react";

export default function UserRoomCardFilter() {
    const filterOptions = [
        { icon: <Filter size={16} />, label: "Filter" },
        { icon: <ListFilter size={16} />, label: "Urutkan" },
        { icon: <Users size={16} />, label: "Capacity" },
        { icon: <Heater size={16} />, label: "Amenities" },
        { icon: <Star size={16} color="#F2C265" />, label: "Rating" },
    ];

    return (
        <div className="flex overflow-x-auto w-full px-4 md:max-w-screen-xl mx-auto gap-3 pb-2 mb-1 no-scrollbar bg-white md:bg-transparent backdrop-blur-sm">
            {filterOptions.map((option, idx) => (
                <button key={idx} className="flex items-center gap-1 px-3 py-2 border rounded-3xl bg-white border-slate-200 transition-all duration-200">
                    {option.icon}
                    <span className="text-sm font-light">{option.label}</span>
                </button>
            ))}
        </div>
    );
}
