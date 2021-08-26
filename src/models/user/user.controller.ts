import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Crud({
  model: {
    type: UserDto,
  },
})
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('api/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
