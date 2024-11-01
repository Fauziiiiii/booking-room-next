import { useQuery } from "@tanstack/react-query"
import { getAllBuilding } from "../actions/get-all-building"

export const useGetAllBuilding = () => {
    return useQuery({
        queryKey: ["get-all-building"],
        queryFn: () => getAllBuilding()
    })
}