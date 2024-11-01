import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UpdateFloorDto } from "../dto/update-floor-dto"
import { updateRoom } from "../actions/update-floor"

export const useUpdateRoom = (id: string) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (updatedRoom: UpdateFloorDto) => updateRoom(id, updatedRoom),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-room"]})
            return toast.success("Success update a new room data")
        }
    })
}
