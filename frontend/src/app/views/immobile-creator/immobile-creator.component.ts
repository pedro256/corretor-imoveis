import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import Immobile from 'src/app/shared/view-models/models/immobile';
import User from 'src/app/shared/view-models/models/user';
import {TypeProfile} from 'src/app/shared/enum/type-profile.enum'
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
  listCoord:Array<User> = new Array<User>();
  formError?: string;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private immobileService: ImmobileService
  ) {
  }
  ngOnInit(): void {
    this.getTypesImmob()
    this.findCoordenators()
  }

  
  findCoordenators(){
    this.apiService.get("user/clients",{type:TypeProfile.Coordinator}).subscribe(
      (value) => {
        this.listCoord = value as Array<User>
    },
    err => {
        console.error(err)
    },
    )
  }

  getTypesImmob(){
    this.immobileService.getTypes().subscribe(
      (result:ITypesImmob[])=>{
        this.listTypesImmob = result;
      }
    )
  }

  onSubmit(){
    if(!this.immobile.nome){
      this.formError = "Nome é obrigatório !"
    }
    if(!this.immobile.description){
      this.formError = "Descrição é obrigatório !"
    }
    if(!this.immobile.address){
      this.formError = "Endereço é obrigatório !"
    }
    if(!this.immobile.region){
      this.formError = "Região é obrigatório !"
    }
    if(!this.immobile.price){
      if(this.immobile.price>1){
        this.formError = "Preço deve ser maior que 1 !";
      }
      this.formError = "Preço é obrigatório !";
    }
    console.log("immobile",this.immobile)
  }

  clearFormError(){
    this.formError = undefined;
  }
}
