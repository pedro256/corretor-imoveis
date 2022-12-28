import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import Immobile from 'src/app/shared/view-models/models/immobile';

@Component({
  selector: 'app-imobile-component',
  templateUrl: './imobile.component.html',
  styleUrls:['./imobile.component.css']
})
export class ImobileComponent implements OnInit{
  
  list:Array<Immobile> = []
  constructor(
    private apiService: ApiService
  ) {
  }
  ngOnInit(): void {
    this.apiService.get("immobile").subscribe(
      (value) => {
        this.list = value as Array<Immobile>
        console.log(value)
    },
    err => {
        console.error(err)
    },
    )
  }


}
