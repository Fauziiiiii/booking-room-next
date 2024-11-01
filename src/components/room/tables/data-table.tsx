"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useGetAllBuilding } from "@/lib/building/hooks/useGetAllBuilding"
import { useQuery } from "@tanstack/react-query"
import { getAllFloorByIdBuilding } from "@/lib/building/actions/get-all-floor-by-id-building"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
}

export default function DataTableRooms<TData, TValue>({
  columns,
  data: initialData,
  isLoading: initialLoading,
}: DataTableProps<TData, TValue>) {
  const router = useRouter()
  const [selectedBuilding, setSelectedBuilding] = useState<string>("")
  const [selectedFloor, setSelectedFloor] = useState<string>("")
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowsPerPage, setRowsPerPage] = useState("10")

  const { data: buildings } = useGetAllBuilding()

  // Query for floors based on selected building
  const { data: floors, isLoading: floorsLoading } = useQuery({
    queryKey: ["floors-by-id-building", selectedBuilding],
    queryFn: () => getAllFloorByIdBuilding(selectedBuilding),
    enabled: !!selectedBuilding,
  })


  // Reset floor selection when building changes
  useEffect(() => {
    setSelectedFloor("")
  }, [selectedBuilding, initialData])

  const table = useReactTable({
    data: initialData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  })

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(value)
    table.setPageSize(Number(value))
  }

  const handleBuildingChange = (value: string) => {
    setSelectedBuilding(value)
    setSelectedFloor("")
  }

  const isLoading = initialLoading || floorsLoading

  console.log(selectedFloor)

  return (
    <>
      {/* Filters */}
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filter by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />

        <Select value={rowsPerPage} onValueChange={handleRowsPerPageChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            {["10", "20", "30", "40", "50"].map((count) => (
              <SelectItem key={count} value={count}>{`${count} rows`}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Building Filter */}
        <Select value={selectedBuilding} onValueChange={handleBuildingChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select Building" />
          </SelectTrigger>
          <SelectContent>
            {buildings?.map((building) => (
              <SelectItem key={building.id} value={building.id}>
                {building.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Floor Filter */}
        <Select
          value={selectedFloor}
          onValueChange={setSelectedFloor}
          disabled={!selectedBuilding || floorsLoading}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select Floor" />
          </SelectTrigger>
          <SelectContent>
            {floors?.map((floor) => (
              <SelectItem key={floor.id} value={floor.id}>
                {floor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={() => router.push('/super-admin/room/create')}
          className="ml-auto"
        >
          <Plus /> Add Room
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border">
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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}