import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";


//@UseGuards(AuthGuard('jwt'))
@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('/signin')
    async createUser(
        @Body('password') password: string,
        @Body('email') username: string,
    ): Promise<any> {

        const result = await this.authService.validateUser(username,password);
        if(result){
            return await this.authService.login(result);
        }
        return result;
    }
}