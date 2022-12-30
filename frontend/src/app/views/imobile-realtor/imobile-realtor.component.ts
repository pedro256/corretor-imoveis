import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import { TypeProfile } from 'src/app/shared/enum/type-profile.enum';
import Immobile from 'src/app/shared/view-models/models/immobile';
import User from 'src/app/shared/view-models/models/user';
import { ModalEditItemImmobile } from './modal/edit-item/edit-item.component';
import { ModalAprovarItemImmobile } from './modal/aprovar/aprovar.component';

@Component({
  selector: 'app-imobile-realtor-component',
  templateUrl: './imobile-realtor.component.html',
  styleUrls: ['./imobile-realtor.component.css']
})
export class ImobileRealtorComponent implements OnInit {

  list: Array<Immobile> = []
  user: User = new User();
  filterTable: Immobile = new Immobile();
  enumTypeProfile = TypeProfile

  constructor(
    private router: Router,
    private apiService: ApiService,
    private profileService: UserProfileService,
    private modalService: NgbModal,
  ) {
  }
  ngOnInit(): void {
    this.getUserProfile()
    this.getImmobile()
  }
  getImmobile() {
    this.apiService.get("immobile", this.filterTable).subscribe(
      (value) => {
        this.list = value as Array<Immobile>
        console.log(value)
      },
      err => {
        console.error(err)
      },
    )
  }
  getUserProfile() {
    this.profileService.getUser().subscribe(
      (response) => {
        console.log(response)
        this.user = response as User;
      },
      err => {

      }
    )
  }
  getUserType(type: number): string {
    switch (type) {
      case 1:
        return "Cliente";
      case 2:
        return "Corretor";
      case 3:
        return "Coordenador";
      default:
        return "Usuário";
    }
  }
  getSttAproved(stt){
    if(stt==undefined){
      return "Em Analise"
    }
    if(stt){
      return "Aprovado"
    }
    return "Reprovado"
  }
  gotoCreateImobileView(){
    this.router.navigate(["/immobile/new"])
  }
  openModalUpdateItem(item:Immobile){
    const modalRef = this.modalService.open(ModalEditItemImmobile);
    modalRef.componentInstance.immobile = item;
  }
  openModalAprovar(item:Immobile){
    const modalRef = this.modalService.open(ModalAprovarItemImmobile);
    modalRef.componentInstance.immobile = item;
  }






}
