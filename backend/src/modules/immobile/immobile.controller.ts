import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Put, Query, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import BuyImmobile from "src/dto/buy-immobile";
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
        @Body() body: IMockImmobile,
        @Request() req
    ): Promise<IMockImmobile> {

        const userId = req.user.userId;
        const user = MockUsers.find(x=>x.id==userId);
        const coord = MockUsers.find(x=>x.id == body.coordId);

        const immob :IMockImmobile = {
            address:body.address,
            description:body.description,
            codig:body.codig,
            region:body.region,
            nome:body.nome,
            price:body.price,
            type:body.type,
            imgUrl:body.imgUrl,

            forsale:true,
            id: Math.floor(Math.random() * 1000),
            createdAt: new Date(),
            approved: false,
            
            realtorId:user.id,
            coordId: coord.id,
            coordName:coord.name,
            createdByUser:user.id,
            realtorName: user.name
            
        }

        MockImmobile.push(immob);
        return immob;
    }

    @Post("buy")
    @HttpCode(HttpStatus.OK)
    async buy( @Body() body:BuyImmobile){
        const immobile = MockImmobile.find(x =>x.id == body.idImmobile);
        if(immobile){
            immobile.forsale = false;
            immobile.clientId = body.idUser;
        }
        return immobile;
    }


    @Put("approve/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async aprovar( 
        @Param('id') id: number
    ): Promise<any> {
        const immob = MockImmobile.find(x => x.id == id);
        if(immob){
            immob.approved = true;
        }
        return immob;
    }

    @Put("disapprove/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async desaprovar( 
        @Param('id') id: number
    ): Promise<any> {
        const immob = MockImmobile.find(x => x.id == id);
        if(immob){
            immob.approved = false;
        }
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

    @Get("/types")
    @HttpCode(HttpStatus.OK)
    async getTypesList(
    ): Promise<any> {
        return [
            {
                id:1,
                name:"Casa",
            },
            {
                id:2,
                name:"Apartamento"
            }
        ]
    }


    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async findone( @Param() params): Promise<IMockImmobile> {
        const immobile = MockImmobile.find(x =>x.id == params.id);
        return immobile;
    }
    

    @Get("")
    @HttpCode(HttpStatus.OK)
    async findAll(
        @Query() query:IMockImmobile
    ): Promise<Array<IMockImmobile>> {
        var data = MockImmobile;
        if(query.nome!=null){
            data = data.filter(x=>x.nome.includes(query.nome))
        }
        if(query.realtorName!=null){
            data = data.filter(x=>x.realtorName.includes(query.realtorName))
        }
        if(query.clientId != null){
            data = data.filter(x => x.clientId == query.clientId)
        }
        if(query.realtorId != null){
            data = data.filter(x => x.realtorId == query.realtorId)
        }
        if(query.codig != null){
            data = data.filter(x=>x.codig.includes(query.codig))
        }
        if(query.coordName != null){
            data = data.filter(x=>x.coordName.includes(query.coordName))
        }
        return data;
    }

   


}