import { OrgProfileEntityInterface } from "../interfaces/org-profile.interface";
import { OrgEntity } from "../../../entities/org.entity";

export class OrgProfileDto implements OrgProfileEntityInterface {
  id: string; // Assuming ReferenceIdInterface has an 'id' field
  name: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  orgId: string;
  org: OrgEntity;
} 