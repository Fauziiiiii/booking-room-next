"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Building } from "@/types/building"
import { Floor } from "@/types/floor";

export const getAllFloorByIdBuilding = async (idBuilding: string): Promise<Floor[]> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/buildings/${idBuilding}/floors`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting all floor by building id", e)
        throw e
    }
}