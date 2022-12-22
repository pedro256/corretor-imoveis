import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import {MockUsers} from '../../mocks/user.data'


//@UseGuards(AuthGuard('jwt'))
//@UseGuards(AuthGuard('local'))
@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ) { }

    
    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    async createUser(
        @Body('password') password: string,
        @Body('email') username: string
    ): Promise<any> {

        const result = await this.authService.validateUser(username,password);
        if(!result){
            throw new HttpException('Dados inválidos', HttpStatus.FORBIDDEN);
        }
        return await this.authService.login(result);
    }

    @Get("/test")
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    async test( @Request() req) {
        const userId = req.user.userId;
        const {type} = MockUsers.find(x=>x.id==userId);

        const response = {
            authenticated:true,
            user:req.user
        }
        response.user.type = type;

        return response
    }



}