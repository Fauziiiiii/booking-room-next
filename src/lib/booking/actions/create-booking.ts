"use server"

import { baseApi } from "@/lib/api/endpoint"
import { Room } from "@/types/room"
import { CreateBookingDto } from "../dto/create-booking-dto"
import { Booking } from "@/types/booking"

export const createBooking = async (newRoom: Partial<CreateBookingDto>): Promise<Booking> => {
    try{
        const result = await baseApi.post("/api/bookings", newRoom)
        // await new Promise((resolve) => setTimeout(resolve, 1500))
        return result.data;
    } catch (e) {
        console.error("Error while creating Booking", e)
        throw e;
    }
}