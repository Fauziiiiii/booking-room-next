"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Building } from "@/types/building"

export const getByIdBuilding = async (idBuilding: string): Promise<Building> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/buildings/${idBuilding}`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting building by id", e)
        throw e
    }
}