import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UpdateBuildingDTO } from "../dto/update-building-dto"
import { updateBuilding } from "../actions/update-building"

export const useUpdateBuilding = (id: string) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (updatedBuilding: UpdateBuildingDTO) => updateBuilding(id, updatedBuilding),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-building"]})
            return toast.success("Success update a new building data")
        }
    })
}
