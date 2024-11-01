import { Room } from "@/types/room";

export type UpdateFloorDto = Omit<Room, 'id' | 'createdAt' | 'updatedAt'>;