"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetByIdUser } from '@/lib/users/hooks/useGetByIdUser'
import React, { Suspense } from 'react'
import EditUserForm from './_components/edit-user-form'

export default function EditUserPage({ params }: { params: { userId: string } }) {
  return (
    <>
      <CardHeader>
        <CardTitle className='font-extrabold text-2xl'>Edit User</CardTitle>
        <CardDescription>Update your User in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<EditUserFormSkeleton />}>
          <EditUserFormWrapper userId={params.userId} />
        </Suspense>
      </CardContent>
    </>
  )
}

function EditUserFormWrapper({ userId }: { userId: string }) {
  const { data: user, isLoading, error } = useGetByIdUser(userId)

  if(isLoading) {
    return <EditUserFormSkeleton />
  }
  
  if (error) {
    return (
      <div className="text-red-500">
        Failed to load user data. Please try again.
      </div>
    )
  }

  if (!user && !isLoading) {
    return (
      <div className="text-gray-500">
        User not found.
      </div>
    )
  }

  if (user) {
    return <EditUserForm initialData={user} />
  } else {
    return <Skeleton className="space-y-4" />
  }
}

function EditUserFormSkeleton() {
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
