import { NgModule } from "@angular/core";
import { RoutingModule } from "../route/app-routing.module";
import { HomeModule } from "../views/home/home.module";
import { LayoutComponent } from "./layout.component";


@NgModule({
    imports:[
        RoutingModule,
        HomeModule
    ],
    declarations:[
        LayoutComponent
    ],
    exports:[
        LayoutComponent
    ]
})
export class LayoutModule{}