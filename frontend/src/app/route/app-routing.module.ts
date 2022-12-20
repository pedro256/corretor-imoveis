import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../views/home/home.component";
import { HomeModule } from "../views/home/home.module";
import { LoginComponent } from "../views/login/login.component";


const routes:Routes = [
    {path:"login",component:LoginComponent},
    {path:"",component:HomeComponent}
]


export const RoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);