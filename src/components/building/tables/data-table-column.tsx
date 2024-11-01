import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "@/utils/format-date"
import ActionToggle from "./data-table-action-toggle"
import { Building } from "@/types/building"

const buildingColumns: ColumnDef<Building>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "street",
    header: "Street",
  },
  {
    accessorKey: "postalCode",
    header: "Postal Code",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return formatDate(row.original.createdAt)
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const building = row.original

      return (
        <ActionToggle buildingId={building.id} />
      )
    },
  },
]

export default buildingColumns;