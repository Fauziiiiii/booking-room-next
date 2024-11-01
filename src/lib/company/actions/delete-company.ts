"use server"

import { baseApi } from "@/lib/api/endpoint"

export const deleteCompany = async (companyId: string): Promise<void> => {
    try{
        await baseApi.delete(`/api/companies/${companyId}`)
    } catch(e){
        console.error("Error while deleting company", e)
        throw e
    }
}