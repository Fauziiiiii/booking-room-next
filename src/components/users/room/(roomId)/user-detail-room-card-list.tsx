/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import listRoomImage from  "@/public/img/list-room-1.jpg"
import { Building2, MapPin, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AirVent, Coffee, Phone, Projector, Wifi } from 'lucide-react'

export default function UserDetailRoomCard({ room, isVertical}:  { room: any, isVertical: boolean }) {

    return (
        <div className={`bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out 
            flex flex-col
            hover:border-[#1E3A5F] hover:shadow-lg`}>
            <div className="w-full relative">
                <Image 
                    src={listRoomImage} 
                    alt="Room Image" 
                    width={120} 
                    height={120} 
                    className="rounded-t-lg object-cover w-full h-36 hover:blur-[2px] transition-all duration-300"
                    loading="lazy"
                    unoptimized
                />
                <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
                    <Users size={10} className="mr-1" /> {room.capacity} Capacity
                </span>
            </div>
        
            {/* Detail Ruangan di bawah gambar */}
            <div className="w-full flex flex-col justify-between space-y-2 p-4">
                <div>
                    <p></p>
                    <h2 className="text- font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">{room.name}</h2>
                    <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis flex gap-x-1 items-center mb-[2px]">
                        <Building2 size={12}/>
                        {room.floorName}, Tower Building
                    </p>
                    <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis flex gap-1 items-center mb-[2px]">
                        <MapPin size={12}/>
                        Cakung, Jakarta Timur
                    </p>
                    <div className="flex text-sm">
                        <p className="text-sm text-gray-700">4.7</p>
                        <span className="text-sm text-gray-500">/5 (348 Reviews)</span>
                    </div>
                </div>
        
                <div className="flex space-x-2 mt-1 text-gray-500 items-center">
                    <AmmenitiesIconRelevanRoom/>
                    <p className="text-sm font-semibold"> (+3)</p>
                </div>
            </div>
        </div>
    );
}

function AmmenitiesIconRelevanRoom() {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Wifi width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>WiFi</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <AirVent width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Air Conditioner</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Coffee width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Coffee</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Projector width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Projector</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}