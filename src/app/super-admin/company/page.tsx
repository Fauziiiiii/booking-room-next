"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DataTableCompanies from "@/components/company/tables/data-table"
import companyColumns from "@/components/company/tables/data-table-column"
import { useGetAllCompany } from "@/lib/company/hooks/useGetAllCompany"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

export default function CompanyPage() {
  const { data: companies, isLoading } = useGetAllCompany()

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full mt-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-3xl font-extrabold">
            Company Management
          </CardTitle>
          <Button asChild>
            <Link
              href="/super-admin/company/create"
              className="flex items-center gap-2"
            >
              <PlusCircleIcon className="h-5 w-5" />
              Add Company
            </Link>
          </Button>
        </CardHeader>
          <CardContent className="p-6">
            <DataTableCompanies
              columns={companyColumns}
              data={companies ?? []}
              isLoading={isLoading}
              searchKey="name" // Sesuaikan dengan key yang digunakan untuk pencarian
            />
          </CardContent>
          </Card>
    </div>
  )
}