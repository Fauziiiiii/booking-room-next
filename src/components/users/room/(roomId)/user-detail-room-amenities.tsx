'use client';

import { useState } from 'react';
import { Wifi, Coffee, Snowflake, Projector, ClipboardList } from 'lucide-react';

interface Facility {
  id: string;
  name: string;
}

interface RoomAmenitiesProps {
  facilities: Facility[];
}

export default function RoomAmenities({ facilities }: RoomAmenitiesProps) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const visibleFacilities = showAllAmenities ? facilities : facilities.slice(0, 6);

  const toggleAmenities = () => {
    setShowAllAmenities(!showAllAmenities);
  };

  // Icon mapping for facilities
  const iconMap: Record<string, JSX.Element> = {
    "Air Conditioner": <Snowflake size={16} className="text-gray-600" />,
    "Coffe": <Coffee size={16} className="text-gray-600" />,
    "WiFi": <Wifi size={16} className="text-gray-600" />,
    "WhiteBoard": <ClipboardList size={16} className="text-gray-600" />,
    "Projector": <Projector size={16} className="text-gray-600" />,
  };

  return (
    <div className="container-amenities w-full p-4">
      <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Amenities</h2>
          {facilities.length > 6 && (
            <button
              onClick={toggleAmenities}
              className="text-[#1e3a5f] text-sm font-semibold mt-2"
            >
              {showAllAmenities ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {visibleFacilities.map((facility) => (
            <div key={facility.id} className="flex items-center space-x-2 text-gray-700">
              {iconMap[facility.name] || <ClipboardList size={22} className="text-gray-600 font-bold" />}
              <span className="text-md">{facility.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
