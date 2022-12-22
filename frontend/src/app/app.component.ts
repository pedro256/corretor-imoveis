import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Profile from 'src/view-models/profile-jwt';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  authenticated: boolean = false
  profile: Profile = new Profile();

  constructor(
    private modalService: NgbModal,
    private apiService: ApiService
    ) {
  }
  ngOnInit(): void {
    const token = this.apiService.getToken();
    if(token.length){
      this.apiService.get("auth/test").subscribe(
        (response:any) => {
          this.authenticated = response.authenticated
          this.profile = response.user;
        },
        err => console.error(err)
      )
    }else{
      this.authenticated = false
    }
  }

  onSignInEmit():void{
    this.ngOnInit()
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
