import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {AuthenticationComponent  } from "./authentication.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: "", component: AuthenticationComponent },
    { path: "register", component: RegisterComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthenticationRoutingModule { }
