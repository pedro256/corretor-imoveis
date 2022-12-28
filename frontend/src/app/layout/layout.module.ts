import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { RoutingModule } from "../route/app-routing.module";
import { ClientsRealtorModule } from "../views/clients-realtor/clients-realtor.module";
import { GerencialModule } from "../views/gerencial/gerencial.module";
import { HomeModule } from "../views/home/home.module";
import { ImobileCreatorModule } from "../views/immobile-creator/immobile-creator.module";
import { ImobileModule } from "../views/imobile-clients/imobile.module";
import {  ImobileRealtorModule } from "../views/imobile-realtor/imobile-realtor.module";
import { ProfileModule } from "../views/profile/profile.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    imports:[
        RoutingModule,
        CommonModule,
        ComponentsModule,
        HomeModule,
        ProfileModule,
        ImobileRealtorModule,
        ClientsRealtorModule,
        ImobileModule,
        GerencialModule,
        ImobileCreatorModule
        
    ],
    declarations:[
        LayoutComponent,
    ],
    exports:[
        LayoutComponent,
        ComponentsModule,
        CommonModule
    ]
})
export class LayoutModule{}