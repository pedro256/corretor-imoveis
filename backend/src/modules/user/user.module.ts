import { Module } from "@nestjs/common"
import { PassportModule } from "@nestjs/passport"
import { UserController } from "./user.controller"


@Module({
  imports: [ 
  ],
  providers: [
  ],
  controllers: [
    UserController
  ],
})
export class  UserModule { }