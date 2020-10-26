import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationRoutingModule } from "./authentication.routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        AuthenticationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthenticationModule { }
