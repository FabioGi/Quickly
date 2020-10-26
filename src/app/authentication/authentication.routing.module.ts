import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {AuthenticationComponent  } from "./authentication.component";

const routes: Routes = [
    { path: "default", component: AuthenticationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthenticationRoutingModule { }
