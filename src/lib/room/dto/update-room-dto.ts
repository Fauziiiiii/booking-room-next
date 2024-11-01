import { Room } from "@/types/room";

export type UpdateRoomDTO = Omit<Room, 'id' | 'createdAt' | 'updatedAt'>;