import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ExerciceComponent } from "./exercice/exercice.component";

import { HomeRoutingModule } from "./home-routing.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { HomeComponent } from "./module/home.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";
// import { HomeComponent } from "./module/home.component";
// import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent,
        ExerciceComponent,
        QuestionnairesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
