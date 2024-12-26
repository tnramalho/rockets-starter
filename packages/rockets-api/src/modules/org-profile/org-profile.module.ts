import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import {
  OrgProfileControllerFixture,
  OrgProfileCrudServiceFixture,
  ORG_PROFILE_CRUD_SERVICE_TOKEN,
} from './org-profile.builder';
import { OrgProfileEntity } from './org-profile.entity';


@Module({
  imports: [TypeOrmModule.forFeature([OrgProfileEntity])],
  providers: [
    {
      provide: ORG_PROFILE_CRUD_SERVICE_TOKEN,
      useClass: OrgProfileCrudServiceFixture,
    },
  ],
  controllers: [OrgProfileControllerFixture],
})
export class OrgProfileModuleFixture {}
