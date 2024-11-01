import { useQuery } from "@tanstack/react-query";
import { getByIdBuilding } from "../actions/get-by-id-building";

export const useGetByIdBuilding = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-building", id],
        queryFn: async () => await getByIdBuilding(id),
    })
}