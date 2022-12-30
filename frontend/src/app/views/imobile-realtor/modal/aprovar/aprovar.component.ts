import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import Immobile from 'src/app/shared/view-models/models/immobile';

@Component({
    selector: 'app-modal-aprovar-immobile-component',
    templateUrl: './aprovar.component.html',
})
export class ModalAprovarItemImmobile implements OnInit {

    immobile: Immobile = new Immobile();

    constructor(
        public activeModal: NgbActiveModal,
        public immobileService: ImmobileService
    ) {
    }

    ngOnInit(): void {}
        
    update(aproved:boolean){
        this.immobile.approved = aproved;
        this.immobileService.evaluateImmobile(this.immobile).subscribe(
            (res)=>{
                alert("Dados Atualizados !!");
                this.activeModal.close('Close click');
            },
            (e)=>{alert("Erro Algo deu errado !!")}
        )
        
        
    }

}
