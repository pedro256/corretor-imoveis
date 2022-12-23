import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserProfileService } from 'src/app/services/user/user-profile.service';
import User from 'src/view-models/models/user';
import IUser from 'src/view-models/models/user';
import Profile from 'src/view-models/profile-jwt';

@Component({
    selector: 'app-profile-component',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

    user: User  = new User();

    constructor(
        private profileService:UserProfileService,
        private router: Router
    ) {
    }




    ngOnInit(): void {
        this.profileService.getUser().subscribe(
            (response)=>{
                console.log(response)
                this.user = response as User;
            },
            err => {
                
            }
            )
    }
    getUserType(type:number):string{
        switch(type){
            case 1:
                return "Cliente";
            case 2:
                return "Corretor";
            case 3:
                return "Coordenador";
            default:
                return "Usuário";
        }
    }
    loggout(){
        this.profileService.loggout();
        
        this.router.navigate(["/"])

    }


}
