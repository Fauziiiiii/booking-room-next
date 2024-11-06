import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createRoom } from "../actions/create-room"
import { CreateRoomDTO } from "../dto/create-room-dto"

export const useCreateRoom = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (newRoom: CreateRoomDTO) => createRoom(newRoom),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-room"]})
            // return toast.success("Succes create a new room")
        },
        onError: (err) => {
            console.error(err);
            throw err;
        }
    })
}
