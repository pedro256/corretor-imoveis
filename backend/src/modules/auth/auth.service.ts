import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MockUsers } from 'src/mocks/user.data';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {

        const user = MockUsers.filter(x =>x.email == username)[0];

        if (!user) return null;

        if(user.password == password){
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
