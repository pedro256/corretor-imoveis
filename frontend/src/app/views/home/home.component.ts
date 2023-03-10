import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit{
  
  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    if(!this.apiService.getToken().length){
      window.location.reload();
    }
    
  }


}
