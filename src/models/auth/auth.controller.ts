import { Controller, Post, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('requestToken')
  async requestToken(@Body() data: LoginDTO): Promise<any> {
    return this.authService.validateUser(data.username, data.password);
  }
}
