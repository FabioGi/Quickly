import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ScoringComponent } from "./scoring.component";

const routes: Routes = [
    { path: "score/:title/:score", component: ScoringComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScoringRoutingModule { }
