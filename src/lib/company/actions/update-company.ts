"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Company } from "@/types/company"
import { UpdateCompanyDTO } from "../dto/update-company-dto";

export const updateCompany = async (companyId: string, updatedCompany: Partial<UpdateCompanyDTO>): Promise<Company> => {
    try{
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = await baseApi.put(`/api/companies/${companyId}`, updatedCompany);
        return result.data;
    } catch(e){
        console.error("Error while updating company", e);
        throw e;
    }
}