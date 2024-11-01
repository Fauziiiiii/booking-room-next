import { useQuery } from "@tanstack/react-query";
import { getByIdRoom } from "../actions/get-by-id-room";

export const useGetByIdRoom = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-room", id],
        queryFn: async () => await getByIdRoom(id),
    })
}