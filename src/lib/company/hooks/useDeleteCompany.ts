import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCompany } from "../actions/delete-company";

export const useDeleteCompany = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteCompany(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-company"]})
        }
    })
}