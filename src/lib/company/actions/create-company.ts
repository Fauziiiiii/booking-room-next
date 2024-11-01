"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Company } from "@/types/company"
import { CreateCompanyDTO } from "../dto/create-company-dto"

export const createCompany = async (newCompany: Partial<CreateCompanyDTO>): Promise<Company> => {
    try{
        const result = await baseApi.post("/api/companies", newCompany)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        return result.data;
    } catch (e) {
        console.error("Error while creating company", e)
        throw e;
    }
}