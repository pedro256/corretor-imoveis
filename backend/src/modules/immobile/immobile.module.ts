import { Module } from "@nestjs/common"
import { PassportModule } from "@nestjs/passport"
import { ImmobileController } from "./immobile.controller"


@Module({
  imports: [ 
  ],
  providers: [
  ],
  controllers: [
    ImmobileController
  ],
})
export class  ImmobileModule { }