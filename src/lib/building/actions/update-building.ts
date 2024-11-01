"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Building } from "@/types/building"
import { UpdateBuildingDTO } from "../dto/update-building-dto";

export const updateBuilding = async (buildingId: string, updatedBuilding: Partial<UpdateBuildingDTO>): Promise<Building> => {
    try{
        const result = await baseApi.put(`/api/buildings/${buildingId}`, updatedBuilding);
        return result.data;
    } catch(e){
        console.error("Error while updating Building", e);
        throw e;
    }
}