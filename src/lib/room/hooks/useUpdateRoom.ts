import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UpdateRoomDTO } from "../dto/update-room-dto"
import { updateRoom } from "../actions/update-room"

export const useUpdateRoom = (id: string) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (updatedRoom: UpdateRoomDTO) => updateRoom(id, updatedRoom),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-room"]})
            return toast.success("Success update a new room data")
        }
    })
}
