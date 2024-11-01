import { Room } from "@/types/room";

export type CreaterFLoorDto = Omit<Room, 'id' | 'createdAt' | 'updatedAt'>;