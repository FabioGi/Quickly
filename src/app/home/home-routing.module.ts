import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./module/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ExerciceComponent } from "./exercice/exercice.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";
import { ResultatQuatreImageComponent } from "./questionnaires/resultat-quatre-image/resultat-quatre-image.component";
import { QuestionnaireSwitchComponent } from "./questionnaire-switch/questionnaire-switch.component";
import { QuestionnaireQcmComponent } from "./questionnaire-qcm/questionnaire-qcm.component";
import { AppariementComponent } from "./appariement/appariement.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "item", component: ItemDetailComponent },
    { path: "exercice", component: ExerciceComponent},
    { path: "questionnaire", component: QuestionnairesComponent},
    { path: "resultat44", component: ResultatQuatreImageComponent},
    { path: "switch", component: QuestionnaireSwitchComponent },
    { path: "qcm", component: QuestionnaireQcmComponent },
    { path: "appar",component: AppariementComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
