"use server"

import { baseApi } from "@/lib/api/endpoint"

export const deleteUser = async (userId: string): Promise<void> => {
    try{
        await baseApi.delete(`/api/users/${userId}`)
    } catch(e){
        console.error("Error while deleting user", e)
        throw e
    }
}