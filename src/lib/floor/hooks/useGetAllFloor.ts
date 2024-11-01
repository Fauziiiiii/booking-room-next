import { useQuery } from "@tanstack/react-query"
import { getAllFloor } from "../actions/get-all-floor"

export const useGetAllFloor = () => {
    return useQuery({
        queryKey: ["get-all-floor"],
        queryFn: () => getAllFloor()
    })
}