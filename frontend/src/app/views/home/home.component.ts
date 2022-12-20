import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
  providers:[]
})
export class HomeComponent {
  
  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
  }



}
