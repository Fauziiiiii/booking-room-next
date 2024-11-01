"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Room } from "@/types/room"
import { UpdateRoomDTO } from "../dto/update-floor-dto";

export const updateRoom = async (roomId: string, updatedRoom: Partial<UpdateRoomDTO>): Promise<Room> => {
    try{
        const result = await baseApi.put(`/api/rooms/${roomId}`, updatedRoom);
        return result.data;
    } catch(e){
        console.error("Error while updating Room", e);
        throw e;
    }
}