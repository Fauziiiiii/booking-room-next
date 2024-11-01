import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteRoom } from "../actions/delete-floor";

export const useDeleteRoom = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRoom(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-room"]})
        }
    })
}