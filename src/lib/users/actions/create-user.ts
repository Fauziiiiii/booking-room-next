"use server"

import { baseApi } from "@/lib/api/endpoint"
import { CreateUserDTO } from "../dto/create-user-dto"
import { User } from "@/types/user"
import { AxiosError } from "axios"

export const createUser = async (newUser: Partial<CreateUserDTO>): Promise<User> => {
    try{
        const result = await baseApi.post("/api/users", newUser)
        return result.data;
    } catch (err) {
        const error = err as AxiosError
        console.error("Error while creating User", error.message)
        throw new Error(`Failed to create user: ${error.message}`)
    }
}