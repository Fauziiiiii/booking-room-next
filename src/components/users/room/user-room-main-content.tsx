"use client"

import React from 'react'
import UserRoomCard from './user-room-card'
// import { useGetAllRoom } from '@/lib/room/hooks/useGetAllRoom'
import RoomLoading from '@/app/(user)/room/loading';
import useRoomFilterStore from '@/lib/store/useRoomFilterStore';
import { useSearchRoom } from '@/lib/room/hooks/useSearchRoom';

export default function UserRoomMainContent() {
    // const { data: rooms, isLoading } = useGetAllRoom();
    const { category, categoryValue, date, attendees } = useRoomFilterStore();

    const { data: rooms, isLoading } = useSearchRoom(
        category,
        categoryValue,
        date,
        attendees
    );
    console.log(category, categoryValue, date, attendees);

    return (
        <div className="flex w-full max-w-screen-xl mx-auto px-4 mt-4">
            {isLoading ? (
                <RoomLoading />
            ) : ( 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                        {rooms?.map((room) => (
                            <UserRoomCard key={room.id} room={room} link={`/room/${room.id}`} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}