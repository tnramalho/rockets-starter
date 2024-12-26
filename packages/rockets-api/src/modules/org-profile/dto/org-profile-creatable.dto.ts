import { OrgProfileCreatableInterface } from "../interfaces/org-profile-creatable.interface";

export class OrgProfileCreatableDto implements OrgProfileCreatableInterface {
  name: string;
  description?: string;
  orgId: string;
} 