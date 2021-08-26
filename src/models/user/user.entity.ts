import { UserInterface } from 'src/common/interfaces/user.interface';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { uuid } from 'uuidv4';
@Entity('users')
export class User implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at?: Date;

  @Column({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: Date;
}
