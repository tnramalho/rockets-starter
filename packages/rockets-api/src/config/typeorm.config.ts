/**
 * !!!!! You MUST run build for changes in this   !!!!!!
 * !!!!! file to take effect for all CLI commands !!!!!!
 */

import { DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import { UserEntity } from '../entities/user.entity';
import { OrgEntity } from '../entities/org.entity';
import { OrgMemberEntity } from '../entities/org-member.entity';
import { FederatedEntity } from '../entities/federated-entity';
import { RoleEntity } from '../entities/role.entity';
import { UserRoleEntity } from '../entities/user-role.entity';
import { UserOtpEntity } from '../entities/user-otp.entity';
import { InvitationEntity } from '../entities/invitation.entity';
import { UserCacheEntity } from '../entities/user-cache.entity';
import { FileEntity } from '../entities/file.entity';
import { ReportEntity } from '../entities/report.entity';
import { OrgProfileEntity } from '../modules/org-profile/org-profile.entity';

export const ormConfigFactory = (): DataSourceOptions => {
  // return the configuration
  return {
    logging: 'all',
    type: 'postgres',
    url:
      process.env.DATABASE_URL ??
      'postgresql://postgres:postgres@rockets-starter-postgres:5432/rockets-starter',
    entities: [
      UserEntity,
      OrgEntity,
      OrgProfileEntity,
      OrgMemberEntity,
      FederatedEntity,
      RoleEntity,
      UserRoleEntity,
      UserOtpEntity,
      InvitationEntity,
      UserCacheEntity,
      FileEntity,
      ReportEntity,
    ],
    subscribers: [__dirname + '/../**/*.subscriber.js'],
    migrations: [__dirname + '/../migrations/*.js'],
    extra: {
      ssl:
        process.env?.DATABASE_SSL === 'true'
          ? {
              rejectUnauthorized: false,
            }
          : false,
    },
  };
};

// import this into your Nest app
export const ormConfig = registerAs('TYPEORM_MODULE_CONFIG', ormConfigFactory);
