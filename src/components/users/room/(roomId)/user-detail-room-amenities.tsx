'use client'

import { useState } from 'react';
import React from 'react'

export default function RoomAmenities() {
    const [showAllAmenities, setShowAllAmenities] = useState(false);
    const amenities = ["Kolam Renang", "AC", "Dapur", "Kulkas", "TV Smart", "Teras atau Balkon", "WiFi", "Breakfast", "Parking", "Garden Area", "Landline", "Medical", "Projector", "Whiteboards"];
    const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, 6);

    const toggleAmenities = () => {
        setShowAllAmenities(!showAllAmenities);
    };

    return (
        <div className="container-amenities w-full p-4">
            <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                {amenities.length > 6 && (
                <button
                    onClick={toggleAmenities}
                    className="text-[#1e3a5f] text-sm font-semibold mt-2"
                >
                    {showAllAmenities ? 'Show Less' : 'Show More'}
                </button>
                )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {visibleAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                    {/* Replace this emoji with appropriate icons if available */}
                    <span className="text-gray-600">🏊</span> {/* Icon example */}
                    <span className="text-sm">{amenity}</span>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}


// interface RoomAmenitiesProps {
//   amenities: string[];
//   initialVisible?: number;
// }

// export function RoomAmenities({ 
//   amenities, 
//   initialVisible = 6 
// }: RoomAmenitiesProps) {
//   const [showAllAmenities, setShowAllAmenities] = useState(false);
//   const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, initialVisible);

//   return (
//     <div className="container-amenities w-full p-4">
//       <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
//         <div className="flex justify-between">
//           <h2 className="text-xl font-semibold mb-4">Amenities</h2>
//           {amenities.length > initialVisible && (
//             <button
//               onClick={() => setShowAllAmenities(!showAllAmenities)}
//               className="text-[#1e3a5f] text-sm font-semibold mt-2"
//             >
//               {showAllAmenities ? 'Show Less' : 'Show More'}
//             </button>
//           )}
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
//           {visibleAmenities.map((amenity, index) => (
//             <div key={index} className="flex items-center space-x-2 text-gray-700">
//               <span className="text-gray-600">🏊</span>
//               <span className="text-sm">{amenity}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
