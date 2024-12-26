import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { OrgEntity } from '../../entities/org.entity';
import { OrgProfileEntityInterface } from './interfaces/org-profile.interface';
import { ReferenceId } from '@concepta/nestjs-common';

@Entity('org_profile')
export class OrgProfileEntity implements OrgProfileEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  id!: ReferenceId;

  @Column({ length: 100 })
  name: string;

  @Column('text', { nullable: true })
  description?: string;

  @Column({ length: 100, nullable: true })
  contactEmail?: string;

  @Column({ length: 15, nullable: true })
  contactPhone?: string;
  
  @Column()
  orgId: string;

  @OneToOne(() => OrgEntity, (org) => org.profile)
  org: OrgEntity;
}