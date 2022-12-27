import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Put, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import BuyImmobile from "src/dto/buy-immobile";
import Dashboard from "src/dto/dashboard";
import { IMockImmobile, MockImmobile } from "src/mocks/immobile.data";
import {IMockUser, MockUsers} from '../../mocks/user.data'


@UseGuards(AuthGuard('jwt'))
@Controller('dashboard')
export class DashboardController {
    constructor(
        //private authService:AuthService
    ) { }

    

    @Get()
    @HttpCode(HttpStatus.OK)
    async get(
        @Param() params
    ): Promise<Dashboard> {
        const retorn  = new Dashboard();
        retorn.numberImmobile = 7289;
        retorn.numberImmobileBought = 821;
        retorn.numberUser = 109290;
        retorn.topImmobile = [
            {
                id:1,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorId:3,
                realtorName:"Marcia",
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },{
                id:2,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorName:"Marcia",
                realtorId:3,
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },
            {
                id:3,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                realtorName:"Marcia",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorId:3,
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },
        ]
        retorn.topImmobileToBuy = [
            {
                id:1,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                realtorName:"Marcia",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorId:3,
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },{
                id:2,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                realtorName:"Marcia",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorId:3,
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },
            {
                id:3,
                nome:"Apartamento EHJI3 ",
                address:"Maximon docefim",
                realtorName:"Marcia",
                codig:"OI38Y"   ,
                coordId:2,
                coordName:"Pedro",
                region:"AM",
                createdAt:new Date(),
                createdByUser:3,
                price:100000,
                forsale:true,
                realtorId:3,
                type:"APARTAMENTO",
                description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
                imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
            },
        ]

        return retorn;
    }



}