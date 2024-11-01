"use server"

import { baseApi } from "@/lib/api/endpoint"
import { CreaterFLoorDto } from "../dto/create-floor-dto"
import { Room } from "@/types/room"

export const createRoom = async (newRoom: Partial<CreaterFLoorDto>): Promise<Room> => {
    try{
        const result = await baseApi.post("/api/rooms", newRoom)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        return result.data;
    } catch (e) {
        console.error("Error while creating Room", e)
        throw e;
    }
}