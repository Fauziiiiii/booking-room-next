import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCompany } from "../actions/create-company"
import { CreateCompanyDTO } from "../dto/create-company-dto"

export const useCreateCompany = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (newCompany: CreateCompanyDTO) => createCompany(newCompany),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-company"]})
        }
    })
}
