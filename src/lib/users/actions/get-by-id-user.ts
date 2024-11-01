"use server"

import { baseApi } from "@/lib/api/endpoint"
import { User } from "@/types/user";

export const getByIdUser = async (idUser: string): Promise<User> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const result = await baseApi.get(`/api/users/${idUser}`);
        return result.data.data;
    } catch (e) {
        console.error("Error while getting user by id", e)
        throw e
    }
}