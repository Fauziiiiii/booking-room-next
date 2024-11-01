"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Company } from "@/types/company"


export const getByIdCompany = async (idCompany: string): Promise<Company> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = await baseApi.get(`/api/companies/${idCompany}`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting company by id", e)
        throw e
    }
}