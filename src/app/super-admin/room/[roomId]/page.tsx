"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import EditRoomForm from './_components/edit-room-form'
import { useGetAllFloor } from '@/lib/floor/hooks/useGetAllFloor'
import { useGetByIdRoom } from '@/lib/room/hooks/useGetByIdRoom'

export default function EditRoomPage({ params }: { params: { roomId: string } }) {
    return (
        <>
            <CardHeader>
                <CardTitle className='font-extrabold text-2xl'>Edit Room</CardTitle>
                <CardDescription>Edit your Room in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <Suspense fallback={<EditRoomFormSkeleton />}>
                <EditRoomFormWrapper roomId={params.roomId} />
                </Suspense>
            </CardContent>
        </>
    )
}

function EditRoomFormWrapper({ roomId }: { roomId: string }) {
    const { data: room, isLoading, error } = useGetByIdRoom(roomId);
    
    const { data: floors } = useGetAllFloor()

    if(isLoading) {
        return <EditRoomFormSkeleton />
    }
    
    if (error) {
        return (
        <div className="text-red-500">
            Failed to load room data. Please try again.
        </div>
        )
    }

    if (!room && !floors && !isLoading) {
        return (
        <div className="text-gray-500">
            room and floors is not found.
        </div>
        )
    }

    if (room && floors) {
        return <EditRoomForm room={room} floorsData={floors} />
    } else {
        return <Skeleton className="space-y-4" />
    }
}

function EditRoomFormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-[100px]" />
    </div>
  )
}
