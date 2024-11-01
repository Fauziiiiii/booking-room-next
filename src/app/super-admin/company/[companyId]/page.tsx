"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import { useGetByIdCompany } from '@/lib/company/hooks/useGetByIdCompany'
import EditCompanyForm from './_components/edit-company-form'

export default function EditCompanyPage({ params }: { params: { companyId: string } }) {
  return (
    <>
      <CardHeader>
        <CardTitle className='font-extrabold text-2xl'>Edit Company</CardTitle>
        <CardDescription>Update your Company in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<EditCompanyFormSkeleton />}>
          <EditCompanyFormWrapper companyId={params.companyId} />
        </Suspense>
      </CardContent>
    </>
  )
}

function EditCompanyFormWrapper({ companyId }: { companyId: string }) {
  const { data: company, isLoading, error } = useGetByIdCompany(companyId)

  if(isLoading) {
    return <EditCompanyFormSkeleton />
  }
  
  if (error) {
    return (
      <div className="text-red-500">
        Failed to load company data. Please try again.
      </div>
    )
  }

  if (!company && !isLoading) {
    return (
      <div className="text-gray-500">
        Company not found.
      </div>
    )
  }

  if (company) {
    return <EditCompanyForm initialData={company} />
  } else {
    return <Skeleton className="space-y-4" />
  }
}

function EditCompanyFormSkeleton() {
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
