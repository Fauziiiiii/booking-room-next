"use client";

import Image from "next/image";
import React from "react";
import listRoomImage from  "@/public/img/list-room-1.jpg"
import { AirVent, Coffee, Phone, Projector, Users, Wifi } from "lucide-react";
import AmmenitiesIcon from "./ammenities-icon-tooltip";

export default function RoomCard({ room, isVertical}:  { room: any, isVertical: boolean }) {

    return (
        <div className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out 
                ${isVertical ? 'flex flex-col' : 'flex flex-row'} 
                space-x-4 md:space-y-0 border border-gray-300 
                hover:border-[#1E3A5F] hover:shadow-lg hover:scale-105`}>
            <div className={`${isVertical ? 'w-full' : 'w-1/3'} relative`}>
                <Image 
                    src={listRoomImage} 
                    alt="Room Image" 
                    width={120} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-full hover:blur-[2px] transition-all duration-300"
                    unoptimized
                    priority
                />
                <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
                    <Users size={10} className="mr-1" /> {room.capacity} Capacity
                </span>
            </div>

            {/* Detail Ruangan */}
            <div className={`${isVertical ? 'w-full mt-4' : 'w-2/3'} flex flex-col justify-between space-y-2`}>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Tower Building</h2>
                    <p className="text-sm text-gray-600">Room Name: {room.name}</p>
                    <p className="text-sm text-gray-500">Floor: {room.floorName}</p>
                    <p className="text-sm text-gray-500">
                        Modern and stylish, the Flinders boardroom boasts floor-to-ceiling windows.
                    </p>
                </div>

                {/* Amenities */}
                <div className="flex space-x-2 mt-2 text-gray-500">
                    <AmmenitiesIcon/>
                    {/* <Wifi width={16} height={16} />
                    <AirVent width={16} height={16} />
                    <Coffee width={16} height={16} />
                    <Projector width={16} height={16} />
                    <Phone width={16} height={16} /> */}
                    {/* {room.amenities.map((amenity: any, index: React.Key | null | undefined) => {
                        switch (amenity) {
                            case "wifi":
                                return <Wifi key={index} width={16} height={16} />;
                            case "ac":
                                return <AirVent key={index} width={16} height={16} />;
                            case "coffee":
                                return <Coffee key={index} width={16} height={16} />;
                            case "projector":
                                return <Projector key={index} width={16} height={16} />;
                            case "phone":
                                return <Phone key={index} width={16} height={16} />;
                            default:
                                return null;
                        }
                    })} */}
                    {/* <span className="text-xs text-gray-500">+{room.amenities.length - 5}</span> */}
                </div>

                <div className="flex space-x-4 mt-4">
                    <button className="bg-[#1E3A5F] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Book Now
                    </button>
                    <button className="bg-teal-100 text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold">
                        Recurring Book
                    </button>
                </div>
            </div>
        </div>
    );
}
