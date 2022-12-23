import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  providers:[]
})
export class LoginComponent {
  
  email:string = "";
  password:string = "";
  @Output() onSingIn:EventEmitter<any> = new EventEmitter();
  constructor(
    private authService:AuthService,
    private router: Router
  ) {
  }
  


  onSubmit(f: NgForm){
    if(f.valid){
      this.login()
    }
  }

  login(){
    this.authService.login(this.email,this.password).subscribe(
      resposta => { 
        console.log("response",resposta)
        this.onSingIn.emit()
      },
      err => alert(err.message)
    )
  }

}
