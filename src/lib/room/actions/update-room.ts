"use server"

import { baseApi } from "@/lib/api/endpoint"
// import { Room } from "@/types/room"
import { UpdateRoomDTO } from "../dto/update-room-dto";
import { RoomQuery } from "@/types/roomQuery";

export const updateRoom = async (roomId: string, updatedRoom: Partial<UpdateRoomDTO>): Promise<RoomQuery> => {
    try{
        const result = await baseApi.put(`/api/rooms/${roomId}`, updatedRoom);
        return result.data;
    } catch(e){
        console.error("Error while updating Room", e);
        throw e;
    }
}