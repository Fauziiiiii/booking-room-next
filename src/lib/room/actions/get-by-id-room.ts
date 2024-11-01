"use server"

import { baseApi } from "@/lib/api/endpoint"
import { RoomQuery } from "@/types/roomQuery";

export const getByIdRoom = async (idRoom: string): Promise<RoomQuery> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/rooms/${idRoom}`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting room by id", e)
        throw e
    }
}