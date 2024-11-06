"use server"

import { baseApi } from "@/lib/api/endpoint"
import { RoomQuery } from "@/types/roomQuery";

export const getAllRoomByIdFloor = async (idFloor: string): Promise<RoomQuery[]> => {
    try {
        // await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/floors/${idFloor}/rooms`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting room by id", e)
        throw e
    }
}

export const getAllRoomByIdFloorWithLimit = async (idFloor: string, limit?: number): Promise<RoomQuery[]> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/floors/${idFloor}/rooms?limit=${limit}`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting room by id", e)
        throw e
    }
}