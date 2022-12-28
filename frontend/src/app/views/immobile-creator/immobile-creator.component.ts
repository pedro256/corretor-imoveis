import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import Immobile from 'src/view-models/models/immobile';

interface ITypesImmob{
  id:number,
  name:string
}

@Component({
  selector: 'app-imobile-creator-component',
  templateUrl: './immobile-creator.component.html'
})
export class ImobileCreatorComponent implements OnInit {


  immobile:Immobile = new Immobile()
  listTypesImmob:Array<ITypesImmob> = new Array<ITypesImmob>();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private immobileService: ImmobileService
  ) {
  }
  ngOnInit(): void {
    this.getTypesImmob()
  }

  getTypesImmob(){
    this.immobileService.getTypes().subscribe(
      (result:ITypesImmob[])=>{
        this.listTypesImmob = result;
      }
    )
  }

  onSubmit(){

  }
}
