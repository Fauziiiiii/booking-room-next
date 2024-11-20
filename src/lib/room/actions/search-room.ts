"use server"

import { baseApi } from "@/lib/api/endpoint"
import { RoomQuery } from "@/types/roomQuery";

export const searchRoom = async ({
    category,
    categoryValue,
    date,
    attendees,
}: {
    category: string | null;
    categoryValue: string | null;
    date: string | null;
    attendees: number | null;
}): Promise<RoomQuery[]> => {
    try {
        const minAttendees = attendees ?? 1;
        const bookingDate = date || '';
        const limit = 30;

        const params = new URLSearchParams();
        if (category) params.append('Category', category);
        if (categoryValue) params.append('CategoryValue', categoryValue);
        if (bookingDate) params.append('BookingDate', bookingDate);
        params.append('MinAttendees', minAttendees.toString());
        params.append('Limit', limit.toString());

        const result = await baseApi.get(
            `http://localhost:5050/api/rooms/filter?${params.toString()}`
        );
        return result.data.data;
    } catch (e) {
        console.error("Error while fetching rooms with search category", e);
        throw e;
    }
}