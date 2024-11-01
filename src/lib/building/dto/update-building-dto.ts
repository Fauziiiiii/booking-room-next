import { Building } from "@/types/building";

export type UpdateBuildingDTO = Omit<Building, 'id' | 'createdAt' | 'updatedAt'>;