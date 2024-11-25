"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Floor } from "@/types/floor";

export const getAllFloor = async (): Promise<Floor[]> => {
    try {
      // await new Promise(resolve => setTimeout(resolve, 1500));
      const result = await baseApi.get("api/floors");
      return result.data.data;
    } catch (e) {
      console.error("Error while fetching floors", e);
      throw e;
    }
  }