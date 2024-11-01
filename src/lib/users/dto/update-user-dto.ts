import { User } from "@/types/user";

export type UpdateUserDTO = Omit<User, 'id' | 'password' | 'createdAt' | 'updatedAt'>;