import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Put, Request, UseGuards } from "@nestjs/common/decorators";
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
    async create(
        @Body() body: IMockImmobile
    ): Promise<IMockImmobile> {

        const immob :IMockImmobile = {
            address:body.address,
            codig:body.codig,
            coordId: body.coordId,
            coordName:body.coordName,
            createdByUser:body.createdByUser,
            createdAt: new Date(),
            description:body.description,
            forsale:body.forsale,
            region:body.region,
            id: Math.floor(Math.random() * 1000),
            nome:body.nome,
            price:body.price,
            realtorId:body.realtorId,
            type:body.type,
            imgUrl:body.imgUrl
        }

        MockImmobile.push(immob);
        return immob;
    }


    @Put(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(
        @Body() body: IMockImmobile,
        @Param() params
    ): Promise<IMockImmobile> {

        const immob = MockImmobile.find(x => x.id == params.id);

        if(immob){
            if(body.address){
                immob.address = body.address
            }
            if(body.nome){
                immob.nome = body.nome
            }
            if(body.codig){
                immob.codig = body.codig
            }
        }
        return immob;
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async findone( @Param() params): Promise<IMockImmobile> {
        const immobile = MockImmobile.find(x =>x.id == params.id);
        return immobile;
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Array<IMockImmobile>> {
        return MockImmobile;
    }



}