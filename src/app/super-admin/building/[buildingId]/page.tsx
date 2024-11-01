"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import EditBuildingForm from './_components/edit-building-form'
import { useGetByIdBuilding } from '@/lib/building/hooks/useGetByIdBuilding'

export default function EditBuildingPage({ params }: { params: { buildingId: string } }) {
  return (
    <>
      <CardHeader>
        <CardTitle className='font-extrabold text-2xl'>Edit Building</CardTitle>
        <CardDescription>Update the Building in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<EditBuildingFormSkeleton />}>
          <EditBuildingFormWrapper buildingId={params.buildingId} />
        </Suspense>
      </CardContent>
    </>
  )
}

function EditBuildingFormWrapper({ buildingId }: { buildingId: string }) {
  const { data: building, isLoading, error } = useGetByIdBuilding(buildingId)

  if(isLoading) {
    return <EditBuildingFormSkeleton />
  }
  
  if (error) {
    return (
      <div className="text-red-500">
        Failed to load building data. Please try again.
      </div>
    )
  }

  if (!building && !isLoading) {
    return (
      <div className="text-gray-500">
        Building not found.
      </div>
    )
  }

  if (building) {
    return <EditBuildingForm initialData={building} />
  } else {
    return <Skeleton className="space-y-4" />
  }
}

function EditBuildingFormSkeleton() {
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
