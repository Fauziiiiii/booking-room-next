import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateUserDTO } from "../dto/update-user-dto"
import { updateUser } from "../actions/update-user"

export const useUpdateUser = (id: string) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (updatedUser: UpdateUserDTO) => updateUser(id, updatedUser),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-user"]})
        }
    })
}
