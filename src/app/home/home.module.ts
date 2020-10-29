import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { HomeComponent } from "./module/home.component";
// import { HomeComponent } from "./module/home.component";
// import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
