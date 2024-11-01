import { Company } from "@/types/company";

export type CreateCompanyDTO = Omit<Company, 'id' | 'createdAt' | 'updatedAt'>;