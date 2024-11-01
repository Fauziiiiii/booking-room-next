"use server"

import { baseApi } from "@/lib/api/endpoint"
import { User } from "@/types/user";

export const  getAllUser = async (): Promise<User[]> => {
    try {
      const result = await baseApi.get("api/users");
      return result.data.data;
    } catch (e) {
      console.error("Error while fetching users", e);
      throw e;
    }
  }