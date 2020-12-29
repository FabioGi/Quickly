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
import { QuatreImageBisComponent } from "./quatre-image-bis/quatre-image-bis.component";
import { SwitchBisComponent } from "./switch-bis/switch-bis.component";
import { QcmBisComponent } from "./qcm-bis/qcm-bis.component";
import { AppariementBisComponent } from "./appariement-bis/appariement-bis.component";
import { ResultatSwitchComponent } from "./questionnaire-switch/resultat-switch/resultat-switch.component";
import { QcmResponseComponent } from "./questionnaire-qcm/qcm-response/qcm-response.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
   // { path: "item", component: ItemDetailComponent },
    { path: "exercice/:title", component: ExerciceComponent},
    { path: "questionnaire/:id1/:id2", component: QuestionnairesComponent},
    { path: "resultat44/:id1/:id2/:response/:image/:correct/:cimage", component: ResultatQuatreImageComponent},
    { path: "switch/:id1/:id2", component: QuestionnaireSwitchComponent },
    { path: "qcm/:id1/:id2", component: QuestionnaireQcmComponent },
    { path: "appar/:id1/:id2",component: AppariementComponent},
    { path: "quatre-bis/:id1/:id2", component: QuatreImageBisComponent},
    { path: "switch-bis/:id1/:id2", component: SwitchBisComponent},
    { path: "qcm-bis/:id1/:id2", component: QcmBisComponent},
    { path: "apar-bis/:id1/:id2", component: AppariementBisComponent},
    { path: "result-switch/:id1/:id2/:response/:image/:correct/:cimage",component: ResultatSwitchComponent},
    {path:  "response-qcm/:id1/:id2/:response/:correct", component: QcmResponseComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
