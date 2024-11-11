/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import listRoomImage from  "@/public/img/list-room-1.jpg"
import { Users } from "lucide-react";
import AmmenitiesIcon from "./ammenities-icon-tooltip";

export default function RoomCard({ room, isVertical}:  { room: any, isVertical: boolean }) {

    return (
        <div className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out 
            flex flex-col space-y-4
            hover:border-[#1E3A5F] hover:shadow-lg hover:scale-105`}>
            <div className="w-full relative">
                <Image 
                    src={listRoomImage} 
                    alt="Room Image" 
                    width={120} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-48 hover:blur-[2px] transition-all duration-300"
                    unoptimized
                    priority
                />
                <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
                    <Users size={10} className="mr-1" /> {room.capacity} Capacity
                </span>
            </div>
        
            {/* Detail Ruangan di bawah gambar */}
            <div className="w-full flex flex-col justify-between space-y-2">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Tower Building</h2>
                    <p className="text-sm text-gray-600">Room Name: {room.name}</p>
                    <p className="text-sm text-gray-500">Floor: {room.floorName}</p>
                    <p className="text-sm text-gray-500">
                        Modern and stylish, the Flinders boardroom boasts floor-to-ceiling windows.
                    </p>
                </div>
        
                <div className="flex space-x-2 mt-2 text-gray-500">
                    <AmmenitiesIcon/>
                </div>
            </div>
        </div>
    );
}
