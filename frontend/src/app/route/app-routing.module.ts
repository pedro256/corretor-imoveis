import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../views/login/login.component";


const routes:Routes = [
    {path:"login",component:LoginComponent},
    {path:"",component:AppComponent}
]


export const RoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);