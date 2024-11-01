import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBuilding } from "../actions/create-building"
import { CreateBuildingDTO } from "../dto/create-building-dto"

export const useCreateBuilding = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (newBuilding: CreateBuildingDTO) => createBuilding(newBuilding),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-building"]})
            // return toast.success("Succes create a new building")
        },
        onError: (err) => {
            console.error(err);
            throw err;
        }
    })
}
