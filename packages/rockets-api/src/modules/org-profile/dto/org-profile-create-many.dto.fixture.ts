import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OrgProfileCreatableDto } from './org-profile-creatable.dto';
import { CrudCreateManyDto } from '@concepta/nestjs-crud';
import { OrgProfileDto } from './org-profile.dto';

@Exclude()
export class OrgProfileCreateManyDtoFixture extends CrudCreateManyDto<OrgProfileCreatableDto> {
  @Expose()
  @ApiProperty({ type: [OrgProfileDto], isArray: true })
  @Type(() => OrgProfileCreatableDto)
  bulk: OrgProfileCreatableDto[] = [];
}
