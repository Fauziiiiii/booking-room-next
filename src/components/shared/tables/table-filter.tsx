import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"

interface TableFilterProps<T> {
  table: Table<T>
}

const TableFilter = <T extends { name: string }>({ table }: TableFilterProps<T>) => {
    return (
      <Input
        placeholder="Filter companies..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
    )
  }

export default TableFilter
