import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import Immobile from 'src/view-models/models/immobile';
import User from 'src/view-models/models/user';

@Component({
  selector: 'app-gerencial-component',
  templateUrl: './gerencial.component.html',
  styleUrls:['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {
  

  constructor(
    private apiService: ApiService
  ) {
  }
  ngOnInit(): void {
  }
  



}
