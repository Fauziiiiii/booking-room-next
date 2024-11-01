"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Company } from "@/types/company"

export const getAllCompany = async (): Promise<Company[]> => {
    try {
        const result = await baseApi.get("api/companies");
        return result.data.data;
    } catch (e) {
        console.error("Error while fetching companies");
        throw e;
    }
}