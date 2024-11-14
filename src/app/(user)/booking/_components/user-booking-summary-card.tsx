/* eslint-disable @typescript-eslint/no-explicit-any */
// Right Side Card Component
import React from 'react';
import listRoomImage from  "@/public/img/list-room-1.jpg"
import Image from 'next/image';

const BookingSummaryCard = ({ roomId, floorId, bookingDate, startTime, endTime }: any) => {
    return (
        <div className='sticky top-6'>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold">Booking Summary</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
                <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                <div className="rounded-lg">
                    <Image src={listRoomImage} alt="Room Thumbnail" className="w-[100px] h-[100px] rounded-lg" />
                </div>
                <div>
                    <p><strong>Room:</strong> Example Room {roomId}</p>
                    <p><strong>Floor:</strong> {floorId}</p>
                    <p><strong>Date:</strong> {bookingDate}</p>
                    <p><strong>Time:</strong> {startTime} - {endTime}</p>
                </div>
                </div>
                <div className="mt-4 flex justify-end">
                <p className="text-red-600 font-bold">IDR 1,831,500</p>
                </div>
            </div>
        </div>
    );
  };

export default BookingSummaryCard;