import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import User from 'src/app/shared/view-models/models/user';

@Component({
    selector: 'app-modal-edit-profile-component',
    templateUrl: './edit-profile.component.html',
})
export class ModalEditProfile implements OnInit {

    user: User = new User();

    constructor(
        public activeModal: NgbActiveModal,
        public profileService: UserProfileService
    ) {
    }




    ngOnInit(): void {}
        
    update(){
        this.profileService.updateUser(this.user).subscribe(
            (res)=>{
                alert("Dados Atualizados !!");
                this.activeModal.close('Close click');
            },
            (e)=>{alert("Erro Algo deu errado !!")}
        )
    }

}
