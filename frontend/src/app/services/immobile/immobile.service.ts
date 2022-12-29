import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import Immobile from 'src/app/shared/view-models/models/immobile';
import { ApiService } from '../api/api.service';


@Injectable()
export class ImmobileService {
    constructor(
        private api: ApiService
    ) { }

    create(immobile:Immobile):Observable<any>{
        return this.api.post('immobile',immobile);
    }


    getTypes():Observable<any>{
        return this.api.get('immobile/types');
    }

}