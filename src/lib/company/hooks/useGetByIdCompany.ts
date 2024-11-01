import { useQuery } from "@tanstack/react-query";
import { getByIdCompany } from "../actions/get-by-id-company";

export const useGetByIdCompany = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-company", id],
        queryFn: async () => await getByIdCompany(id),
    })
}