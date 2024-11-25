import { Booking } from "@/types/booking";
import { Room } from "@/types/room";

export type UpdateFloorDto = Omit<Booking, 'id' | 'bookingCode' | 'status' | 'createdAt' | 'updatedAt'>;