import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import {IMockUser, MockUsers} from '../../mocks/user.data'


//@UseGuards(AuthGuard('jwt'))
//@UseGuards(AuthGuard('local'))
@Controller('user')
export class UserController {
    constructor(
        //private authService:AuthService
    ) { }

    
    

    @Get("/clients")
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    async findall(): Promise<Array<IMockUser>> {
        const clients =  MockUsers.filter(x=>x.type == 1)
        return clients
    }s

    @Get(":id")
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    async findone( @Param() params): Promise<IMockUser> {
        const user = MockUsers.find(x =>x.id == params.id);
        return user;
    }

    



}