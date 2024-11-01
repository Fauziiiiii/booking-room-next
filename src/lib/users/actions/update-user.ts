"use server"

import { baseApi } from "@/lib/api/endpoint"
import { UpdateUserDTO } from "../dto/update-user-dto";
import { User } from "@/types/user";

export const updateUser = async (userId: string, updatedUser: Partial<UpdateUserDTO>): Promise<User> => {
    try{
        const result = await baseApi.put(`/api/users/${userId}`, updatedUser);
        return result.data;
    } catch(e){
        console.error("Error while updating User", e);
        throw e;
    }
}