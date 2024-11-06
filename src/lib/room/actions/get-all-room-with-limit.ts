"use server"

import { baseApi } from "@/lib/api/endpoint"
import { RoomQuery } from "@/types/roomQuery";

export const getAllRoomWithLimit = async (limit: number): Promise<RoomQuery[]> => {
    try {
      const result = await baseApi.get(`api/rooms?limit=${limit}`);
      return result.data.data;
    } catch (e) {
      console.error("Error while fetching rooms", e);
      throw e;
    }
  }