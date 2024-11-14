"use client"

import LoadingUserHomePage from '@/app/(user)/_component/loading'
import { useGetAllRoomByIdFloorWithLimit } from '@/lib/room/hooks/useGetAllRoomByIdFloor'
import React from 'react'
import UserDetailRoomCard from './user-detail-room-card-list'

export default function RoomRelevanList() {
    const { data: rooms, isLoading } = useGetAllRoomByIdFloorWithLimit("a18018a2-3081-40c8-9854-8ef52519fc9b", 5)
    return (
        <div className="container-list-relevan-room pb-4                                                ">
            <div className="flex flex-col gap-4 max-w-screen-xl mx-auto md:px-4">
                <div className="mx-4">
                    <h2 className="text-xl font-semibold mb-2">Similar room around Ascor Sudirman Jakarta</h2>
                </div>
                {isLoading ? <LoadingUserHomePage /> : ""}

                {/* Carousel Layout Mobile */}
                <div className="flex overflow-x-scroll no-scrollbar space-x-4 px-4">
                    {rooms?.map((room) => (
                        <div key={room.floorId} className="max-w-[207] md:max-w-[220px] flex-shrink-0 mb-4">
                        <UserDetailRoomCard room={room} isVertical={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
