// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular";
import { AppariementBisComponent } from "./appariement-bis/appariement-bis.component";
import { AppariementComponent } from "./appariement/appariement.component";
import { ExerciceComponent } from "./exercice/exercice.component";

import { HomeRoutingModule } from "./home-routing.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { HomeComponent } from "./module/home.component";
import { QcmBisComponent } from "./qcm-bis/qcm-bis.component";
import { QuatreImageBisComponent } from "./quatre-image-bis/quatre-image-bis.component";
import { QcmResponseComponent } from "./questionnaire-qcm/qcm-response/qcm-response.component";
import { QuestionnaireQcmComponent } from "./questionnaire-qcm/questionnaire-qcm.component";
import { QuestionnaireSwitchComponent } from "./questionnaire-switch/questionnaire-switch.component";
import { ResultatSwitchComponent } from "./questionnaire-switch/resultat-switch/resultat-switch.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";
import { ResultatQuatreImageComponent } from "./questionnaires/resultat-quatre-image/resultat-quatre-image.component";
import { SwitchBisComponent } from "./switch-bis/switch-bis.component";
import { HeaderLayoutComponent } from "./ui/header-layout/header-layout.component";
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
        AppariementComponent,
        QuatreImageBisComponent,
        SwitchBisComponent,
        QcmBisComponent,
        HeaderLayoutComponent,
        ResultatSwitchComponent,
        QcmResponseComponent,
        AppariementBisComponent,
       // SpeedTest
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
