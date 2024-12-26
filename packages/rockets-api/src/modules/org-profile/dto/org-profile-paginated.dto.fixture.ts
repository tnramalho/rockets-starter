import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { OrgProfileDto } from './org-profile.dto';
import { CrudResponsePaginatedDto } from '@concepta/nestjs-crud';

@Exclude()
export class OrgProfilePaginatedDtoFixture extends CrudResponsePaginatedDto<OrgProfileDto> {
  @ApiProperty({ type: [OrgProfileDto], isArray: true })
  @Expose()
  @Type(() => OrgProfileDto)
  data: OrgProfileDto[] = [];
}
