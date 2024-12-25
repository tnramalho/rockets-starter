import { Entity, ManyToOne } from 'typeorm';
import { ReferenceIdInterface } from '@concepta/nestjs-common';
import { CachePostgresEntity } from '@concepta/nestjs-cache';
import { UserEntity } from './user.entity';

@Entity('user_cache')
export class UserCacheEntity extends CachePostgresEntity {
  @ManyToOne(() => UserEntity, (user) => user.userCaches, { nullable: false })
  assignee!: ReferenceIdInterface;
}
