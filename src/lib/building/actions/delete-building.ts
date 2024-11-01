"use server"

import { baseApi } from "@/lib/api/endpoint"

export const deleteBuilding = async (buildingId: string): Promise<void> => {
    try{
        await new Promise((resolve) => setTimeout(resolve, 1500))
        await baseApi.delete(`/api/buildings/${buildingId}`)
    } catch(e){
        console.error("Error while deleting building", e)
        throw e
    }
}