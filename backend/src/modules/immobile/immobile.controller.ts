import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { IMockImmobile, MockImmobile } from "src/mocks/immobile.data";
import {IMockUser, MockUsers} from '../../mocks/user.data'


@UseGuards(AuthGuard('jwt'))
@Controller('immobile')
export class ImmobileController {
    constructor(
        //private authService:AuthService
    ) { }

    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(
        //@Body('password') password: string,
    ): Promise<any> {

        return null;
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async findone( @Param() params): Promise<IMockImmobile> {
        const immobile = MockImmobile.find(x =>x.id = params.id);
        return immobile;
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Array<IMockImmobile>> {
        return MockImmobile;
    }



}