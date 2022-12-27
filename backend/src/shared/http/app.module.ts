
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/configs/jwt.config';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { UserModule } from 'src/modules/user/user.module';
import { ImmobileModule } from 'src/modules/immobile/immobile.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    ImmobileModule,
    DashboardModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }