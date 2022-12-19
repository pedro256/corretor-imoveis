import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { HttpCode } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";


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
}