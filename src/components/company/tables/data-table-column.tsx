import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "@/utils/format-date"
import ActionToggle from "./data-table-action-toggle"
import { Company } from "@/types/company"

const companyColumns: ColumnDef<Company>[] = [
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
      const company = row.original

      return (
        <ActionToggle companyId={company.id} />
      )
    },
  },
]

export default companyColumns;