import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { OrgPostgresEntity } from '@concepta/nestjs-org';
import { OrgMemberEntity } from './org-member.entity';
import { UserEntity } from './user.entity';
import { OrgProfileEntity } from '../modules/org-profile/org-profile.entity';

@Entity('org')
export class OrgEntity extends OrgPostgresEntity {
  @ManyToOne(() => UserEntity, (user) => user.orgs, { nullable: true })
  owner: UserEntity;

  @OneToMany(() => OrgMemberEntity, (orgMember) => orgMember.org)
  orgMembers!: OrgMemberEntity[];

  @OneToOne(() => OrgProfileEntity, (orgProfile) => orgProfile.org, { cascade: true })
  @JoinColumn()
  profile: OrgProfileEntity;
}
