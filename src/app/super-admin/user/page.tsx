/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTableUsers from "@/components/users/tables/data-table";
import { columns } from "@/components/users/tables/data-table-column"
import { useGetAllUser } from "@/lib/users/hooks/useGetAllUser";
import { Plus } from "lucide-react";
import Link from "next/link";
import LoadingUserPage from "./loading";

export default function UsersPage () {
  // await new Promise((resolve) => setTimeout(resolve, 1500))
  const { data: users, isLoading } = useGetAllUser()
  return (
    // <div className="container mx-auto">
    //   <div className="w-full min-h-[90vh] flex justify-center items-center">
    <div className="container mx-auto py-8">
      <div className="w-full mt-4">
        <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-3xl font-extrabold">Users Management</CardTitle>
            <Button asChild>
              <Link href={"/super-admin/user/create"}>
                <Plus/> Add User
              </Link>
            </Button>
          </CardHeader>
          {isLoading ? (
            <LoadingUserPage/>
          ) : (
            <CardContent>
              <DataTableUsers
                columns={columns} 
                data={users ?? []} 
                isLoading={isLoading} 
              />
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};