"use server"

import { baseApi } from "@/lib/api/endpoint"

export const deleteRoom = async (roomId: string): Promise<void> => {
    try{
        await baseApi.delete(`/api/rooms/${roomId}`)
    } catch(e){
        console.error("Error while deleting room", e)
        throw e
    }
}