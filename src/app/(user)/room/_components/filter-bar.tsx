import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function FilterBar() {
    return (
        <div className="flex flex-wrap items-center gap-3 py-4 max-w-screen-xl mx-auto px-4">
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full shadow px-3 py-2 w-full sm:w-auto">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Jakarta"
                    className="w-full outline-none bg-transparent text-gray-700"
                />
            </div>

            {/* Date Picker */}
            <div className="bg-white rounded-full shadow px-4 py-2 text-gray-700 cursor-pointer">
                Kam, 21 Nov 2024 - Jum, 22 Nov 2024 (1 malam)
            </div>

            {/* Guest Count */}
            <div className="bg-white rounded-full shadow px-4 py-2 text-gray-700 cursor-pointer">
                1 Tamu
            </div>

            {/* Filter Options */}
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-700">
                Filter
            </button>
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full px-4 py-2">
                Urutkan <span className="text-xs bg-blue-500 text-white rounded-full px-2 ml-1">1</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-700">
                Harga
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-700">
                Bunga
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-700">
                Jumlah Kamar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-700">
                Filter Populer
            </button>
        </div>
    );
}
