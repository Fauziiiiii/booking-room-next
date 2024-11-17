import { useQuery } from "@tanstack/react-query"
import { getAllUser } from "../actions/get-all-user"

export const useGetAllUser = () => {
    return useQuery({
        queryKey: ["get-all-user"],
        queryFn: () => getAllUser()
    })
}

export const useGetAllUserForBooking = (open: boolean) => {
    return useQuery({
        queryKey: ["get-all-user"],
        queryFn: () => getAllUser(),
        enabled: open
    })
}