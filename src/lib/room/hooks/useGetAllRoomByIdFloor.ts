import { useQuery } from "@tanstack/react-query"
import { getAllRoomByIdFloor } from "../actions/get-all-room-by-id-floor"

export const useGetAllRoomByIdFloor = (idFloor: string) => {
    return useQuery({
        queryKey: ["get-all-room-by-floorId"],
        queryFn: async () => await getAllRoomByIdFloor(idFloor)
    })
}