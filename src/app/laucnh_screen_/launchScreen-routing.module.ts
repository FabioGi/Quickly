import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { LaunchScreenComponent } from "./launch_screen.component";

const routes: Routes = [
    { path: "", component: LaunchScreenComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LauuchScreenRoutingModule { }
