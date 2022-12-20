import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ApiService } from '../api/api.service';


@Injectable()
export class AuthService {
    constructor(
        private api: ApiService
    ) { }

    login(email: string, password: string) :Observable<any>{
        return new Observable((subscriber) => {
            this.api.post('auth/signin', { email, password }).subscribe(
                (value:any) => {
                    this.api.setToken(value.access_token)
                    subscriber.next()
                },
                err => {
                    subscriber.error(err)
                },
            )
        })
    }

}