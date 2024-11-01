import { Room } from "@/types/room";

export type CreateRoomDTO = Omit<Room, 'id' | 'createdAt' | 'updatedAt'>;