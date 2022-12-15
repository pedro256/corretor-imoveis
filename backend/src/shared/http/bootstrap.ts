import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export async function bootstrap ():Promise<INestApplication>{
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api')
    return app;
}