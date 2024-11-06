import { useQuery } from "@tanstack/react-query";
import { getByIdRoom } from "../actions/get-by-id-room";
import { getAllRoomWithLimit } from "../actions/get-all-room-with-limit";

export const useGetAllRoomWithLimit = (limit: number) => {
    return useQuery({
        queryKey: ["rooms-with-limit", limit],
        queryFn: async () => await getAllRoomWithLimit(limit),
    })
}