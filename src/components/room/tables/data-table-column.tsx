import { ColumnDef } from "@tanstack/react-table"
import ActionToggle from "./data-table-action-toggle"
import { Room } from "@/types/room"

export const columns: ColumnDef<Room>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "floorName",
    header: "Floor",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const room = row.original

      return (
        <ActionToggle roomId={room.id}/>
        
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
