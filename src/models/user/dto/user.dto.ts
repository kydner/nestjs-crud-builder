import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserInterface } from 'src/common/interfaces/user.interface';
export class UserDto implements UserInterface {
  @IsUUID('all')
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
