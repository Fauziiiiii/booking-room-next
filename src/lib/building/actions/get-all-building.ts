"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Building } from "@/types/building"

export const getAllBuilding = async (): Promise<Building[]> => {
    try {
      const result = await baseApi.get("api/buildings");
      return result.data.data;
    } catch (e) {
      console.error("Error while fetching buildings", e);
      throw e;
    }
  }