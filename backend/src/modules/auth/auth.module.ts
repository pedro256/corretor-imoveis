import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local-strategy.auth';
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [ 
    PassportModule, 
    JwtModule.register({
      privateKey:'123467',
      signOptions: { expiresIn: '24h' },
    }), 
  ],
  providers: [
    AuthService, 
    LocalStrategy,
    JwtStrategy,
    ConfigService
  ],
  controllers: [AuthController],
})
export class  AuthModule { }