import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ApiService } from '../api/api.service';


@Injectable()
export class ImmobileService {
    constructor(
        private api: ApiService
    ) { }

    create(){}


    getTypes():Observable<any>{
        return this.api.get('immobile/types');
    }

}