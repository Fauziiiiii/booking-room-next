import { ColumnDef } from "@tanstack/react-table"
import { User } from "@/types/user"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { MoreHorizontal, Pen, Trash } from "lucide-react"
import { formatDate } from "@/utils/format-date"
import ActionToggle from "./data-table-action-toggle"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "nrp",
    header: "NRP",
  },
  {
    accessorKey: "userName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
  },
  {
    accessorKey: "companyId",
    header: "Company",
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
      const user = row.original

      return (
        <ActionToggle userId={user.id}/>
        
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(user.id)}
        //     >
        //       Copy user ID
        //     </DropdownMenuItem>
        //     <DropdownMenuItem onClick={() => window.location.href = `/super-admin/user/${user.id}`}>
        //       <Pen className="mr-2 h-4 w-4" />
        //       Edit
        //     </DropdownMenuItem>
        //     <DropdownMenuItem className="text-red-600" onClick={() => console.log("delete function masih otwww")}>
        //       <Trash className="mr-2 h-4 w-4" />
        //       Delete
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      )
    },
  },
]
