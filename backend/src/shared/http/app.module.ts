
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/configs/jwt.config';
import { ConfigService } from '@nestjs/config/dist/config.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }