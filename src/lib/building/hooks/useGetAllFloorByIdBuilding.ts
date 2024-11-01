import { useQuery } from "@tanstack/react-query";
import { getAllFloorByIdBuilding } from "../actions/get-all-floor-by-id-building";

export const useGetAllFloorByIdBuilding = (id: string) => {
    return useQuery({
        queryKey: ["get-all-floor-by-id-building", id],
        queryFn: async () => await getAllFloorByIdBuilding(id),
    })
}