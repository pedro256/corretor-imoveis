import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientsRealtorComponent } from "../views/clients-realtor/clients-realtor.component";
import { GerencialComponent } from "../views/gerencial/gerencial.component";
import { HomeComponent } from "../views/home/home.component";
import { ImobileCreatorComponent } from "../views/immobile-creator/immobile-creator.component";
import { ImobileComponent } from "../views/imobile-clients/imobile.component";
import { ImobileRealtorComponent } from "../views/imobile-realtor/imobile-realtor.component";
import { LoginComponent } from "../views/login/login.component";
import { ProfileComponent } from "../views/profile/profile.component";


const routes: Routes = [
    //{path:"login",component:LoginComponent},
    { path: "", component: HomeComponent },
    { path: "profile", component: ProfileComponent },
    {
        path: "immobile",
        children: [
            {path:"",component:ImobileComponent},
            {path:"realtor",component:ImobileRealtorComponent},
            {path:"new", component:ImobileCreatorComponent}
        ]
    },
    //{ path: "immobile-realtor", component: ImobileRealtorComponent },
    //{ path: "immobile-client", component: ImobileComponent },
    { path: "clients", component: ClientsRealtorComponent },
    { path: "gerencial", component: GerencialComponent }
]


export const RoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);