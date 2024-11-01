import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteRoom } from "../actions/delete-room";

export const useDeleteRoom = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRoom(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-room"]})
        }
    })
}