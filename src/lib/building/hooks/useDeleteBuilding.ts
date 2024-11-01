import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBuilding } from "../actions/delete-building";

export const useDeleteBuilding = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBuilding(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-building"]})
        },
        onError: (err) => {
            console.error("Error deleting building: ", err);
            throw err;
        }
    })
}