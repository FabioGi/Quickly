import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./module/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ExerciceComponent } from "./exercice/exercice.component";
import { QuestionnairesComponent } from "./questionnaires/questionnaires.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "item", component: ItemDetailComponent },
    { path: "exercice", component: ExerciceComponent},
    { path: "questionnaire", component: QuestionnairesComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
