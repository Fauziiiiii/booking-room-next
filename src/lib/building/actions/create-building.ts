"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Building } from "@/types/building"
import { CreateBuildingDTO } from "../dto/create-building-dto"

export const createBuilding = async (newBuilding: Partial<CreateBuildingDTO>): Promise<Building> => {
    try{
        const result = await baseApi.post("/api/buildings", newBuilding)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        return result.data;
    } catch (e) {
        console.error("Error while creating Building", e)
        throw e;
    }
}