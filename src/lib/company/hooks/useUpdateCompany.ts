import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UpdateCompanyDTO } from "../dto/update-company-dto"
import { updateCompany } from "../actions/update-company"
import { redirect } from "next/navigation"

export const useUpdateCompany = (id: string) => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: async (updatedCompany: UpdateCompanyDTO) => await updateCompany(id, updatedCompany),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-company"]})
        }
    })
}
