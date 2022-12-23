import { Body, Controller, Post, HttpStatus, HttpException } from "@nestjs/common";
import { Get, HttpCode, Param, Patch, Put, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { IMockUser, MockUsers } from '../../mocks/user.data'


@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
    constructor(
        //private authService:AuthService
    ) { }




    @Get("/clients")
    @HttpCode(HttpStatus.OK)
    async findall(): Promise<Array<IMockUser>> {
        const clients = MockUsers.filter(x => x.type == 1)
        return clients
    } s

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async findone(@Param() params): Promise<IMockUser> {
        const user = MockUsers.find(x => x.id == params.id);
        return user;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async cadastro(@Body() body: IMockUser): Promise<IMockUser> {
        const user: IMockUser = {
            email: body.email,
            address: body.address,
            name: body.name,
            password: body.password,
            surname: body.surname,
            type: body.type,
            id: Math.floor(Math.random() * 1000)
        }

        MockUsers.push(user)
        return user;
    }


    @Put(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async atualizar(@Body() body: IMockUser, @Param() params): Promise<any> {
        const user = MockUsers.find(x => x.id == params.id);
        if (user) {
            if (body.name) {
                user.name = body.name
            }
            if (body.surname) {
                user.surname = body.surname
            }
            if (body.address) {
                user.address = body.address
            }
            if (body.email) {
                user.email = body.email
            }
        }
        return user;
    }


    @Patch("/password/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async atualizarSenha(@Body() body: IMockUser, @Param() params): Promise<any> {
        const user = MockUsers.find(x => x.id == params.id);
        if (user) {
            if (body.password) {
                user.password = body.password
            }
        }
        return user;
    }


}