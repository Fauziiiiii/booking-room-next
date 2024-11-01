import { Company } from "@/types/company";

export type UpdateCompanyDTO = Omit<Company, 'id' | 'createdAt' | 'updatedAt'>;