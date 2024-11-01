import { useQuery } from "@tanstack/react-query";
import { getByIdFloor } from "../actions/get-by-id-floor";

export const useGetByIdFloor = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-floor", id],
        queryFn: async () => await getByIdFloor(id),
    })
}