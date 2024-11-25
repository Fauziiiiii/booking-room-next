"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import CreateRoomForm from './_components/create-room-form'
import { useGetAllFloor } from '@/lib/floor/hooks/useGetAllFloor'
import { useGetAllBuilding } from '@/lib/building/hooks/useGetAllBuilding'

export default function CreateRoomPage() {
  return (
    <>
      <CardHeader>
        <CardTitle className='font-extrabold text-2xl'>Create Room</CardTitle>
        <CardDescription>Create your Room in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<CreateRoomFormSkeleton />}>
          <CreateRoomFormWrapper />
        </Suspense>
      </CardContent>
    </>
  )
}

function CreateRoomFormWrapper() {
  const { data: floors, isLoading, error } = useGetAllFloor()
  const { data: buildings, isLoading: isLoadingBuilding, error: errorBuilding } = useGetAllBuilding()

  if(isLoading) {
    return <CreateRoomFormSkeleton />
  }
  
  if (error && errorBuilding) {
    return (
      <div className="text-red-500">
        Failed to load room data. Please try again.
      </div>
    )
  }

  if (!floors && !isLoading && !buildings && !isLoadingBuilding) {
    return (
      <div className="text-gray-500">
        room and building not found.
      </div>
    )
  }

  if (floors && buildings) {
    return <CreateRoomForm buildingsData={buildings} floorsData={floors} />
  } else {
    return <Skeleton className="space-y-4" />
  }
}

function CreateRoomFormSkeleton() {
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
