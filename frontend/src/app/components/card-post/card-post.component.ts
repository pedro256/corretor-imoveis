import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import Immobile from 'src/view-models/models/immobile';

@Component({
  selector: 'app-card-post-component',
  templateUrl: './card-post.component.html',
  styleUrls:['./card-post.component.css']
})
export class CardPostComponent {
  

  @Input() immobileData:Immobile = new Immobile();
  

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
  }



}
