import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ApiService } from '../api/api.service';

interface IResponseLogin{
    success:boolean,
    message:string
}

@Injectable()
export class AuthService {
    constructor(
        private api:ApiService
    ) { }

    login(email:string,password:string){
        return this.api.get('auth', {email,password})
    }
}