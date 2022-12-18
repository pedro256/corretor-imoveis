import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local-strategy.auth';


@Module({
  imports: [ 
    PassportModule, 
    JwtModule.register({
      privateKey:process.env.JWT_PRIV_KEY,
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }), 
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class  AuthModule { }