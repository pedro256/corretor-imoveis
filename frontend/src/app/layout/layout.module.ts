import { NgModule } from "@angular/core";
import { RoutingModule } from "../route/app-routing.module";
import { LayoutComponent } from "./layout.component";


@NgModule({
    imports:[
        RoutingModule
    ],
    declarations:[
        LayoutComponent
    ],
    exports:[
        LayoutComponent
    ]
})
export class LayoutModule{}