// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import listRoomImage from  "@/public/img/list-room-1.jpg"
// import Image from 'next/image';
// import { format } from 'date-fns';

// const BookingSummaryCard = ({ roomId, floorId, bookingDate, startTime, endTime }: any) => {
//   const jancok = new Date(bookingDate)
//   const formattedDate = jancok?.toLocaleDateString('en-US', {
//     weekday: 'short',
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric'
//   }) || ''
//   // console.log(formattedDate, "card jancok");
  
//     return (
//         <div className='sticky top-6'>
//             <div className="mb-4">
//                 <h2 className="text-2xl font-semibold">Your Order</h2>
//             </div>
//             <div className="sticky top-6 bg-white rounded-xl shadow-md p-6 h-fit">
//                 <div className="flex gap-4 ">
//                   <div className="rounded-lg max-w-24">
//                       <Image src={listRoomImage} alt="Room Thumbnail" className="rounded-lg" loading='lazy' />
//                   </div>
//                   <div>
//                       <p className='font-semibold text-lg'>Conference Room A</p>
//                       {/* <p>{bookingDate}</p> */}
//                       <p>{formattedDate}</p>
//                       <p>{startTime} - {endTime}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 mt-2">
//                   <div>
//                       <p className='font-semibold text-lg'>Conference Room A</p>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     );
//   };

// export default BookingSummaryCard;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import listRoomImage from "@/public/img/list-room-1.jpg";
import Image from "next/image";
import { Building2, MapPin, Calendar, Clock, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AmmenitiesIconRelevanRoom } from "@/components/users/room/(roomId)/user-detail-room-card-list";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BookingSummaryCard = ({
  roomId,
  floorId,
  bookingDate,
  startTime,
  endTime,
}: any) => {
  return (
    <div className="sticky top-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Your Order Summary</h2>
      </div>
      <div className="sticky top-6 bg-white rounded-xl shadow-lg h-fit overflow-hidden">
        {/* Room Image Carousel */}
        <div className="border-b border-gray-300">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={listRoomImage}
                    alt={`Room Thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-primary-foreground hover:bg-background/75 focus:outline-none">
                <ChevronLeftIcon className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-primary-foreground hover:bg-background/75 focus:outline-none">
                <ChevronRightIcon className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Room Details */}
        <div className="p-4 space-y-1">
          {/* <div> */}
            <h2 className="text-lg font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
              Tech Valley Creative Hub
            </h2>
            <p className="text-sm text-gray-500 flex items-center gap-x-2">
              <Building2 size={16} />
              Lantai 7, Tower Building
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-x-2">
              <MapPin size={16} />
              Cakung, Jakarta Timur
            </p>
          {/* </div> */}

          {/* <div className="flex items-center gap-2 text-gray-500">
            <AmmenitiesIconRelevanRoom />
            <p className="text-sm font-semibold">(+3 amenities)</p>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Booking Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-gray-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Booking Date</p>
              <p className="text-base font-semibold">{bookingDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={20} className="text-gray-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-base font-semibold">
                {startTime} - {endTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryCard;
