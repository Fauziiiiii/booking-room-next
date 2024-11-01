/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import buildingColumns from "@/components/building/tables/data-table-column"
import { Plus } from "lucide-react";
import Link from "next/link";
import LoadingUserPage from "./loading";
import { useGetAllBuilding } from "@/lib/building/hooks/useGetAllBuilding";
import DataTableBuildings from "@/components/building/tables/data-table";

export default function BuildingsPage () {
  const { data: buildings, isLoading } = useGetAllBuilding()
  return (
    <div className="container mx-auto py-8">
      <div className="w-full mt-4">
        <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-3xl font-extrabold">Building Management</CardTitle>
            <Button asChild>
              <Link href={"/super-admin/building/create"}>
                <Plus/> Add building
              </Link>
            </Button>
          </CardHeader>
          {isLoading ? (
            <LoadingUserPage/>
          ) : (
            <CardContent>
              <DataTableBuildings
                columns={buildingColumns} 
                data={buildings ?? []} 
                isLoading={isLoading} 
              />
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};