"use server"

import { baseApi } from "@/lib/api/endpoint"
import { RoomQuery } from "@/types/roomQuery";

export const  getAllRoom = async (): Promise<RoomQuery[]> => {
    try {
      // await new Promise(resolve => setTimeout(resolve, 1500));
      const result = await baseApi.get("api/rooms");
      return result.data.data;
    } catch (e) {
      console.error("Error while fetching rooms", e);
      throw e;
    }
  }