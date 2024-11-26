import { Body, Controller, Get, Headers, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {

    constructor(private userService : UserService
    ){}

    @Post('signup')
    async createUser(
        @Body()user
    ){
        return await this.userService.createUser(user);
    }

    @Get('account-info/:username')
    async getUserInfo(
        @Param(':username')username: string
        ){
        return this.userService.findUserByUsernameNoPassword(username);
    }
}
