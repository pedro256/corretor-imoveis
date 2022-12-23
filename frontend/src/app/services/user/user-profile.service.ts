import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ApiService } from '../api/api.service';


@Injectable()
export class UserProfileService {
    constructor(
        private api: ApiService
    ) { }

    getUser() {
        return new Observable((subscriber) => {
            this.api.get('auth/test').subscribe(
                (value:any) => {
                    this.api.get("user",value.user.userId).subscribe(
                        (value) => {
                            subscriber.next(value)
                        },
                        err => {
                            subscriber.error(err)
                        },
                    )
                },
                err => {
                    subscriber.error(err)
                },
            )
        })
    }

    loggout(){
        this.api.setToken("")
    }

}