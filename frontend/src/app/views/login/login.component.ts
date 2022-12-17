import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(
    private authService:AuthService
  ) {
  }


  onSubmit(f: NgForm){
    if(f.valid){
      this.login()
    }
  }

  login(){

    // this.authService.login(this.email,this.password).subscribe(data=>{
    //   if(data.success){
        
    //   }
    // })

    console.log("email",this.email);
    console.log("password",this.password);
  }

}
