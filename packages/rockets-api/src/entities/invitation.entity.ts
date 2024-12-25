import { Entity, ManyToOne } from 'typeorm';
import { InvitationPostgresEntity } from '@concepta/nestjs-invitation';
import { UserEntity } from './user.entity';
import { ReferenceIdInterface } from '@concepta/nestjs-common';

@Entity('invitation')
export class InvitationEntity extends InvitationPostgresEntity {
  @ManyToOne(() => UserEntity, (user) => user.invitations)
  user!: ReferenceIdInterface;
}
