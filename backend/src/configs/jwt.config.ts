import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
   privJwtKey: process.env.JWT_PRIV_KEY || "1234"
}));