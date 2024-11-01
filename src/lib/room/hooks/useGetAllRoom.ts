import { useQuery } from "@tanstack/react-query"
import { getAllRoom } from "../actions/get-all-room"

export const useGetAllRoom = () => {
    return useQuery({
        queryKey: ["get-all-room"],
        queryFn: () => getAllRoom(),
    })
}