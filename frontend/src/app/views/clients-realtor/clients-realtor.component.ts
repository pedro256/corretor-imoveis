import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import Immobile from 'src/view-models/models/immobile';
import User from 'src/view-models/models/user';

@Component({
  selector: 'app-clients-realtor-component',
  templateUrl: './clients-realtor.component.html',
  styleUrls:['./clients-realtor.component.css']
})
export class ClientsRealtorComponent implements OnInit {
  
  list:Array<User> = []

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
  }
  ngOnInit(): void {
    this.apiService.get("user/clients").subscribe(
      (value) => {
        this.list = value as Array<User>
        console.log("clients",value)
    },
    err => {
        console.error(err)
    },
    )
  }
  



}
