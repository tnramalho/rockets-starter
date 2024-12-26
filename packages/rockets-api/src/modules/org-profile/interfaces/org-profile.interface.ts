import { ReferenceIdInterface } from "@concepta/nestjs-common";
import { OrgEntity } from "../../../entities/org.entity";

export interface OrgProfileEntityInterface extends ReferenceIdInterface {
  name: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  orgId: string;
  org: OrgEntity;
}