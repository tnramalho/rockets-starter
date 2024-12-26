import { ConfigurableCrudBuilder, CrudSoftDelete } from "@concepta/nestjs-crud";
import { OrgProfileCreatableInterface } from "./interfaces/org-profile-creatable.interface";
import { OrgProfileUpdatableInterface } from "./interfaces/org-profile-updatable.interface";
import { OrgProfileEntityInterface } from "./interfaces/org-profile.interface";
import { OrgProfileEntity } from "./org-profile.entity";
import { OrgProfileDto } from "./dto/org-profile.dto";
import { OrgProfilePaginatedDtoFixture } from "./dto/org-profile-paginated.dto.fixture";
import { OrgProfileCreateManyDtoFixture } from "./dto/org-profile-create-many.dto.fixture";
import { OrgProfileCreatableDto } from "./dto/org-profile-creatable.dto";
import { OrgProfileUpdatableDto } from "./dto/org-profile-updatable.dto";

export const ORG_PROFILE_CRUD_SERVICE_TOKEN = Symbol('__ORG_PROFILE_CRUD_SERVICE_TOKEN__');

const crudBuilder = new ConfigurableCrudBuilder<
  OrgProfileEntityInterface,
  OrgProfileCreatableInterface,
  OrgProfileUpdatableInterface
  >


const { ConfigurableControllerClass, ConfigurableServiceClass } =
crudBuilder.build({
  service: {
    entity: OrgProfileEntity,
    injectionToken: ORG_PROFILE_CRUD_SERVICE_TOKEN,
  },
  controller: {
    path: 'org-profile',
    model: {
      type: OrgProfileDto,
      paginatedType: OrgProfilePaginatedDtoFixture,
    },
  },
  getMany: {},
  getOne: {},
  createMany: {
    dto: OrgProfileCreateManyDtoFixture,
  },
  createOne: {
    dto: OrgProfileCreatableDto,
  },
  updateOne: {
    dto: OrgProfileUpdatableDto,
  },
  replaceOne: {
    dto: OrgProfileUpdatableDto,
  },
  deleteOne: {
    extraDecorators: [CrudSoftDelete(true)],
  },
  recoverOne: { path: 'recover/:id' },
});

export class OrgProfileCrudServiceFixture extends ConfigurableServiceClass {
  // custom code
}
export class OrgProfileControllerFixture extends ConfigurableControllerClass {}
