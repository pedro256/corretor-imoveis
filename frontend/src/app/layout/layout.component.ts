import { Component, Input, OnInit } from '@angular/core';
import NavigationItemNavbar from 'src/view-models/inavigation-item';
import Profile from 'src/view-models/profile-jwt';
import clientsRoutes from './navigation-itens-group/clients.routes';
import coordRoutes from './navigation-itens-group/coord.routes';
import realtorRoutes from './navigation-itens-group/realtor.routes';

@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  
  @Input() profile:Profile = new Profile();
  typeUser:string = "";
  routes:Array<NavigationItemNavbar> = new Array<NavigationItemNavbar>();

  constructor() {
  }
  ngOnInit(): void {
    console.log("profile",this.profile)
    switch(this.profile.type){
      case 1:
        this.routes = clientsRoutes;
        this.typeUser = "Cliente"
        break;
      case 2:
        this.routes = realtorRoutes;
        this.typeUser = "Corretor"
        break;
      case 3:
        this.routes = coordRoutes;
        this.typeUser = "Coordenador"
        break;
    }
  }


  

}
