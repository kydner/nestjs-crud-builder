import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super(repo);
  }

  getUser(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username },
    });
  }
}
