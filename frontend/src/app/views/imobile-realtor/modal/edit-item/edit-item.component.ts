import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import Immobile from 'src/app/shared/view-models/models/immobile';
import User from 'src/app/shared/view-models/models/user';

@Component({
    selector: 'app-modal-edit-immobile-component',
    templateUrl: './edit-item.component.html',
})
export class ModalEditItemImmobile implements OnInit {

    //user: User = new User();
    immobile: Immobile = new Immobile();

    constructor(
        public activeModal: NgbActiveModal,
        public immobileService: ImmobileService
    ) {
    }




    ngOnInit(): void {}
        
    update(){
        
        this.immobileService.updateImmobile(this.immobile).subscribe(
            (res)=>{
                alert("Dados Atualizados !!");
                this.activeModal.close('Close click');
            },
            (e)=>{alert("Erro Algo deu errado !!")}
        )
        
    }

}
