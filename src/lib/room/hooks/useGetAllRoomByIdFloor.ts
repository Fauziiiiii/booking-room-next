import { useQuery } from "@tanstack/react-query"
import { getAllRoomByIdFloor, getAllRoomByIdFloorWithLimit } from "../actions/get-all-room-by-id-floor"

export const useGetAllRoomByIdFloor = (idFloor: string) => {
    return useQuery({
        queryKey: ["get-all-room-by", idFloor],
        queryFn: () => getAllRoomByIdFloor(idFloor),
    })
}

export const useGetAllRoomByIdFloorWithLimit = (idFloor: string, limit: number) => {
    return useQuery({
        queryKey: ["get-all-room-by", idFloor],
        queryFn: () => getAllRoomByIdFloorWithLimit(idFloor, limit),
    })
}