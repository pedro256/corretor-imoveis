import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.css']
})
export class AppPage {
  

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
