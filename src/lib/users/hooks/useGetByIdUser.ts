import { useQuery } from "@tanstack/react-query";
import { getByIdUser } from "../actions/get-by-id-user";

export const useGetByIdUser = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-user", id],
        queryFn: async () => await getByIdUser(id),
    })
}