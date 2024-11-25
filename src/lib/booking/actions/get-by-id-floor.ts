"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Floor } from "@/types/floor";

export const getByIdFloor = async (idFloor: string): Promise<Floor> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await baseApi.get(`/api/floors/${idFloor}`);
        // console.log(result.data)
        return result.data.data;
    } catch (e) {
        console.error("Error while getting Floor by id", e)
        throw e
    }
}