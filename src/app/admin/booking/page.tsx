/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const staticData = [
  { id: 1, name: "Room A", startTime: "2024-10-30T09:00:00", endTime: "2024-10-30T10:00:00" },
  { id: 2, name: "Room B", startTime: "2024-10-30T11:00:00", endTime: "2024-10-30T12:00:00" },
  { id: 3, name: "Room C", startTime: "2024-10-30T13:00:00", endTime: "2024-10-30T14:00:00" },
]

const columns = [
  { accessorKey: "name", header: "Room Name" },
  { accessorKey: "startTime", header: "Start Time" },
  { accessorKey: "endTime", header: "End Time" },
]

export default function RoomBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [filteredData, setFilteredData] = useState(staticData)

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
    const filtered = staticData.filter(
      (booking) => new Date(booking.startTime).toDateString() === date.toDateString()
    )
    setFilteredData(filtered)
  }

  return (
    <div className="booking-page">
      <div className="calendar-section">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="booking-details">
        <h3>Booking Details</h3>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
