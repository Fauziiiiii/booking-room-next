/* eslint-disable @typescript-eslint/no-explicit-any */
import { Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AmmenitiesIcon from '../home/ammenities-icon-tooltip'
import listRoomImage from  "@/public/img/list-room-1.jpg"
import Link from 'next/link'

export default function UserRoomCard({ room, link }: any) {
    return (
        <Link href={link}>
            <div className="
                bg-white rounded-lg shadow-md p-2 transition-all duration-300 ease-in-out
                flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 border border-gray-300 hover:border-[#1E3A5F]
                hover:shadow-lg min-h-[230px]
            ">
                <div className="w-full md:w-1/3 relative">
                    <Image 
                        src={listRoomImage} 
                        alt="Room Image" 
                        width={120} 
                        height={120}
                        className="rounded-lg object-cover w-full h-full hover:blur-[2px] transition-all duration-300"
                        unoptimized
                    />
                    <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
                        <Users size={10} className="mr-1" /> {room.capacity} Capacity
                    </span>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-between space-y-2 px-4 lg:px-0 py-0 lg:py-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{room.buildingName}</h2>
                        <p className="text-sm text-gray-600">Room Name: {room.name}</p>
                        <p className="text-sm text-gray-500">Floor: {room.floorName}</p>
                        <p className="text-sm text-gray-500">
                            {room.description == null ? 'Modern and stylish, the Flinders boardroom boasts floor-to-ceiling windows.' : room.description}
                        </p>
                    </div>
                    <div className="flex space-x-2 mt-2 text-gray-500">
                        <AmmenitiesIcon/>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
                        <button className="bg-[#1E3A5F] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                            Book
                        </button>
                        <button className="hidden lg:block bg-teal-100 text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold">
                            Recurring Book
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

