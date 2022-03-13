import { CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { IUser } from '../../users/entities/Iuser.entity';

export interface EntityBaseInterface {
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser;
}

export abstract class EntityBase implements EntityBaseInterface {
  @CreateDateColumn({
    name: 'created_timestamp',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'last_modified_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;


  @ManyToOne('User')
  @JoinColumn({ name: 'created_by' })
  createdBy: IUser;
}
