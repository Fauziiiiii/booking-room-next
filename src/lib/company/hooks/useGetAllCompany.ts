import { useQuery } from "@tanstack/react-query"
import { getAllCompany } from "../actions/get-all-company"

export const useGetAllCompany = () => {
    return useQuery({
        queryKey: ["get-all-company"],
        queryFn: () => getAllCompany(),
          staleTime: 5 * 60 * 1000, // 5 minutes
    })
}