import { Star, MapPin, Users, Home } from 'lucide-react';

// interface RoomHeaderProps {
//     title: string;
//     rating: number;
//     reviews: number;
//     location: string;
//     capacity: number;
//     size: number;
// }

export default function RoomHeader() {
    return (
        <div className="container-header-room-information w-full p-4">
            <div className="md:max-w-screen-xl md:px-4 mx-auto py-4 border-b border-gray-300">
            <div className="container-room-name mb-2">
                <h1 className="text-2xl font-bold">Heading Title for Office Space Building</h1>
            </div>
            <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto mb-2">
                {/* Rating */}
                <div className="flex items-center gap-1">
                <Star size={16} className="text-gray-700" />
                <span className="text-sm">5.0 • </span><span className='text-xs md:text-sm underline'>100 reviews</span>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-1 ml-2">
                <MapPin size={16} className="text-gray-700" />
                <span className="text-xs md:text-sm underline">(Cakung, Jakarta Timur)</span>
                </div>
                
                {/* Host Info */}
                {/* <div className="flex items-center gap-1">
                <Building2 size={16} className="text-gray-700" />
                <span className="text-xs md:text-sm">Tower building, Lantai 7</span>
                </div> */}
            </div>

            <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto">
                {/* Location */}
                <div className="flex items-center gap-1">
                <Users size={16} className="text-gray-700" />
                <span className="text-xs md:text-sm">12 Guest</span>
                </div>
                {/* Room size */}
                <div className="flex items-center gap-1 ml-2">
                <Home size={16} className="text-gray-700" />
                <span className="text-xs md:text-sm">137.0m²</span>
                </div>
            </div>
            </div>
        </div>
    )
}


// export default function RoomHeader({ 
//     title, 
//     rating, 
//     reviews, 
//     location, 
//     capacity, 
//     size 
//     }: RoomHeaderProps) {
//     return (
//         <div className="container-header-room-information w-full p-4">
//         <div className="md:max-w-screen-xl md:px-4 mx-auto py-4 border-b border-gray-300">
//             <div className="container-room-name mb-2">
//             <h1 className="text-2xl font-bold">{title}</h1>
//             </div>
//             <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto mb-2">
//             <div className="flex items-center gap-1">
//                 <Star size={16} className="text-gray-700" />
//                 <span className="text-sm">{rating} • </span>
//                 <span className='text-xs md:text-sm underline'>{reviews} reviews</span>
//             </div>
            
//             <div className="flex items-center gap-1 ml-2">
//                 <MapPin size={16} className="text-gray-700" />
//                 <span className="text-xs md:text-sm underline">{location}</span>
//             </div>
//             </div>

//             <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto">
//             <div className="flex items-center gap-1">
//                 <Users size={16} className="text-gray-700" />
//                 <span className="text-xs md:text-sm">{capacity} Guest</span>
//             </div>
//             <div className="flex items-center gap-1 ml-2">
//                 <Home size={16} className="text-gray-700" />
//                 <span className="text-xs md:text-sm">{size}m²</span>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// }