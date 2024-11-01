import { Building } from "@/types/building";

export type CreateBuildingDTO = Omit<Building, 'id' | 'createdAt' | 'updatedAt'>;