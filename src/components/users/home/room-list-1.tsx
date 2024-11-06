// "use client"

// import { Skeleton } from "@/components/ui/skeleton";
// import { useGetAllRoom } from "@/lib/room/hooks/useGetAllRoom";
// import listRoomImage from  "@/public/img/list-room-1.jpg"
// import { AirVent, Coffee, Wifi } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// export default function RoomList1Component() {
//     const { data, isLoading } = useGetAllRoom();
    
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
//             {/* Skeleton loading state */}
//             {isLoading 
//                 ? Array.from({ length: 4 }).map((_, index) => (
//                     <div key={`room-skeleton-${index}`} className="flex flex-col space-y-3">
//                         <Skeleton className="h-[125px] w-full rounded-xl" />
//                         <div className="space-y-2">
//                             <Skeleton className="h-4 w-3/4" />
//                             <Skeleton className="h-4 w-1/2" />
//                         </div>
//                     </div>
//                 )) 
//                 : data?.map((room, index) => (
//                     <div key={`room-user-${index}`} className="bg-white rounded-lg shadow-md flex p-4">
//                         {/* Kolom pertama untuk gambar dan amenities */}
//                         <div className="w-1/3 flex flex-col items-center space-y-2">
//                             {/* Gambar Room */}
//                             <Image 
//                                 src={listRoomImage} 
//                                 alt={`Room ${room.name}`} 
//                                 width={80} 
//                                 height={80} 
//                                 className="rounded-lg object-cover"
//                             />
//                             {/* Icon amenities */}
//                             <div className="flex space-x-2 mt-2">
//                                 <Wifi width={15} height={15}/>
//                                 <AirVent width={15} height={15}/>
//                                 <Coffee width={15} height={15}/>
//                             </div>
//                         </div>

//                         {/* Kolom kedua untuk detail room */}
//                         <div className="w-2/3 pl-4 flex flex-col justify-between">
//                             <div>
//                                 <h2 className="text-lg font-bold">{room.name}</h2>
//                                 <p className="text-sm text-gray-600">{room.name}</p>
//                                 <p className="text-sm text-gray-600">Lantai: {room.floorName}</p>
//                             </div>
//                             <p className="text-sm font-semibold text-gray-700">
//                                 Kapasitas: {room.capacity} orang
//                             </p>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }



// "use client"

// import Image from "next/image";
// import React from "react";
// import listRoomImage from  "@/public/img/list-room-1.jpg"
// import { AirVent, Coffee, Phone, Projector, Users, Wifi } from "lucide-react";

// export default function RoomCard() {
//     return (
//         <div className="flex justify-between">
//             <div className="bg-white rounded-lg shadow-md flex p-4 space-x-4 w-full lg:w-[49%]">
//                 <div className="w-1/3 relative">
//                     <Image 
//                         src={listRoomImage} 
//                         alt="Room Image" 
//                         width={120} 
//                         height={120} 
//                         className="rounded-lg object-cover w-full h-full"
//                         unoptimized
//                     />
//                     <span className="flex absolute bottom-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
//                         <Users size={10} className="my-0.5 mr-1"/>6-7 Capacity
//                     </span>
//                 </div>

//                 <div className="w-2/3 space-y-2">
//                     <h2 className="text-lg font-semibold text-gray-800">Tower Building</h2>
//                     <p className="text-sm text-gray-600">Room Name: Mornington Boardroom</p>
//                     <p className="text-sm text-gray-500">
//                         Level 2, Jl. Raya Bekasi Km 22, Cakung, Jakarta Timur
//                     </p>
//                     <p className="text-sm text-gray-500">
//                         Modern and stylish, the Flinders boardroom boasts floor-to-ceiling windows.
//                     </p>

//                     {/* Harga */}
//                     {/* <div className="flex space-x-4 mt-2 text-sm">
//                         <div className="text-center">
//                             <p className="font-semibold text-gray-700">$23</p>
//                             <p className="text-gray-500">Per Hour</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="font-semibold text-gray-700">NA</p>
//                             <p className="text-gray-500">Per Half Day</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="font-semibold text-gray-700">NA</p>
//                             <p className="text-gray-500">Per Full Day</p>
//                         </div>
//                     </div> */}

//                     <div className="flex space-x-2 text-gray-500">
//                         <Wifi width={16} height={16}/>
//                         <AirVent width={16} height={16}/>
//                         <Coffee width={16} height={16}/>
//                         <Projector width={16} height={16}/>
//                         <Phone width={16} height={16}/>
//                         <span className="text-xs text-gray-500">+3</span>
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="bg-[#1E3A5F] text-white px-4 py-2 rounded-lg text-sm font-semibold">
//                             Book Now
//                         </button>
//                         <button className="bg-teal-100 text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold">
//                             Recurring Book
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

import RoomCard from "@/components/users/home/room-card-home";
import { useGetAllRoom } from "@/lib/room/hooks/useGetAllRoom";
import React from "react";

export default function RoomList1Component() {
    const { data, isLoading } = useGetAllRoom();

    // Data Dummy jika data belum tersedia
    const dummyRooms = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        buildingName: `Building ${index + 1}`,
        name: `Room ${index + 1}`,
        floor: index % 5 + 1,
        capacity: 6 + index % 4,
        amenities: ["wifi", "ac", "coffee", "projector", "phone"],
    }));

    const rooms = isLoading ? dummyRooms : data;

    return (
        <div className="w-full">
            {/* Grid layout untuk layar besar */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6">
                {rooms?.map((room) => (
                    <RoomCard key={room.id} room={room} isVertical={false}/>
                ))}
            </div>
            {/* Carousel layout untuk layar kecil */}
            <div className="flex lg:hidden overflow-x-auto space-x-4 p-4 no-scrollbar">
                {rooms?.map((room) => (
                    <div key={room.id} className="flex-shrink-0 w-full sm:w-80">
                        <RoomCard room={room} isVertical={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}
