/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTableRooms from "@/components/room/tables/data-table";
import { columns } from "@/components/room/tables/data-table-column"
import { Plus } from "lucide-react";
import Link from "next/link";
import LoadingRoomPage from "./loading";
import { useGetAllRoom } from "@/lib/room/hooks/useGetAllRoom";
import { SetStateAction, useEffect, useState } from "react";

export default function RoomPage () {
  const { data: rooms, isLoading } = useGetAllRoom()

  return (
    <div className="container mx-auto py-8">
      <div className="w-full mt-4">
        <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-3xl font-extrabold">Rooms Management</CardTitle>
          </CardHeader>
          {isLoading ? (
            <LoadingRoomPage/>
          ) : (
            <CardContent>
              <DataTableRooms
                columns={columns} 
                data={rooms ?? []} 
                isLoading={isLoading} 
              />
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};