// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular";
import { AppariementComponent } from "./appariement/appariement.component";
import { ExerciceComponent } from "./exercice/exercice.component";

import { HomeRoutingModule } from "./home-routing.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { HomeComponent } from "./module/home.component";
import { QuestionnaireQcmComponent } from "./questionnaire-qcm/questionnaire-qcm.component";
import { QuestionnaireSwitchComponent } from "./questionnaire-switch/questionnaire-switch.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";
import { ResultatQuatreImageComponent } from "./questionnaires/resultat-quatre-image/resultat-quatre-image.component";
// import { HomeComponent } from "./module/home.component";
// import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        // CommonModule,
        // BrowserModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent,
        ExerciceComponent,
        QuestionnairesComponent,
        ResultatQuatreImageComponent,
        QuestionnaireSwitchComponent,
        QuestionnaireQcmComponent,
        AppariementComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
