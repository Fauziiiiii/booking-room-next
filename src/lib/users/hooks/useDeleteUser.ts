import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser } from "../actions/delete-user";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-user"]})
        }
    })
}   