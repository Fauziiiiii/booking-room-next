/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { baseApi } from "@/lib/api/endpoint"

export const getGlobalSearch = async (keyword: string): Promise<any[]> => {
    try {
      const result = await baseApi.get(`api/Search/global?Keyword=${keyword}`);
      return result.data.items;
    } catch (e) {
      console.error("Error while fetching global search data", e);
      throw e;
    }
  }