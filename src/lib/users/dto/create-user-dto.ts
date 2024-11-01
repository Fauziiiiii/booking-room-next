import { User } from "@/types/user";

export type CreateUserDTO = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;