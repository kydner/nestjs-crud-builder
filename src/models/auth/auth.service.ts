import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    if (user && user.password === password) return this.login(user);
    if (!user)
      return {
        message: 'Invalid User',
      };

    return {
      message: 'invalid Password',
    };
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
    };
    return this.jwtService.sign(payload);
  }
}
