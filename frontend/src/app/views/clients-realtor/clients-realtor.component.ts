import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import User from 'src/app/shared/view-models/models/user';

@Component({
  selector: 'app-clients-realtor-component',
  templateUrl: './clients-realtor.component.html',
  styleUrls:['./clients-realtor.component.css']
})
export class ClientsRealtorComponent implements OnInit {
  
  list:Array<User> = []
  filterTable: User = new User();

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
  }
  ngOnInit(): void {
    this.findUsers()
  }

  findUsers(){
    this.apiService.get("user/clients",this.filterTable).subscribe(
      (value) => {
        this.list = value as Array<User>
    },
    err => {
        console.error(err)
    },
    )
  }
  



}
