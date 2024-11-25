// "use client"

// import { Skeleton } from "@/components/ui/skeleton";
// import RoomList1Component from "@/components/users/home/room-list-1";
// import { SetStateAction, Suspense, useState } from "react";
// import LoadingUserHomePage from "../_component/loading";
// import { CardMainHeader } from "@/components/users/home/card-main-header";

// export default function UserHomePage() {
//   const [selectedFloor, setSelectedFloor] = useState("Lantai 1");
//   const [selectedBuilding, setSelectedBuilding] = useState("Building"); 
//   const floors = [
//     "Lantai 1",
//     "Lantai 2",
//     "Lantai 3",
//     "Lantai 4",
//     "Lantai 5",
//     "Lantai 6",
//     "Lantai 8"
//   ];

//   const buildings = [
//     "Building",
//     "Tower Building",
//     "Wing Building",
//     "Yayasan Building",
//     "Corpu Building",
//     "Astra Building",
//     "Brantas Building"
//   ];

//   const handleFloorClick = (floor: SetStateAction<string>) => {
//     setSelectedFloor(floor); 
//   };

//   const handleBuildingClick = (building: SetStateAction<string>) => {
//     setSelectedBuilding(building); 
//   };
  
//   return (
//     <>
//       <div className="space-y-8 w-full">
//         <CardMainHeader/>
//         {/* Section 1: List Room sesuai Building dan Floor User */}
//         <section>
//           <h2 className="text-xl lg:text-2xl font-semibold mb-4">Rooms in Your Building</h2>
//           {/* Filter Floors with Chips */}
//           <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 mb-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
//             {floors.map((floor) => (
//               <button
//                 key={`chips-floor-${floor}`}
//                 onClick={() => handleFloorClick(floor)}
//                 className={`flex-none whitespace-nowrap rounded-3xl px-2 lg:px-3 py-2 text-center border transition-all duration-500 ${
//                   selectedFloor === floor
//                     ? "bg-[#e8ebef] border-[#1e3a5f] text-[#1e3a5f]"
//                     : "border-slate-200 text-slate-600 hover:bg-slate-100"
//                 }`}
//               >
//                 <p className="text-sm lg:text-md" style={{fontWeight: 450}}>{floor}</p>
//               </button>
//             ))}
//           </div>
//           <RoomList1Component/>
//         </section>

//         <section>
//           <h2 className="text-xl lg:text-2xl font-semibold mb-4">Popular Rooms in Other Buildings</h2>
          
//           {/* Filter Building with Chips */}
//           <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 mb-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
//             {buildings.map((building) => (
//               <button
//                 key={`chips-building-${building}`}
//                 onClick={() => handleBuildingClick(building)}
//                 className={`flex-none whitespace-nowrap rounded-3xl px-2 lg:px-3 py-2 text-center border transition-all duration-200 ${
//                   selectedBuilding === building
//                     ? "bg-[#e8ebef] border-[#1e3a5f] text-[#1e3a5f]"
//                     : "border-slate-200 text-slate-600 hover:bg-slate-100"
//                 }`}
//               >
//                 <p className="text-sm lg:text-md" style={{fontWeight: 450}}>{building}</p>
//               </button>
//             ))}
//           </div>
//             <RoomList1Component/>
//         </section>
//       </div>
//     </>
//   );
// }


// import { CardMainHeader } from '@/components/users/home/card-main-header'
import { RoomsSection } from '@/components/users/home/rooms-section'
import React from 'react'

export default function UserHomePage() {
  return (
    <div className="space-y-8 w-full">
      <RoomsSection/>
    </div>
  )
}
