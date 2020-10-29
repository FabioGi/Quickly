import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationRoutingModule } from "./authentication.routing.module";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        AuthenticationComponent,
        RegisterComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthenticationModule { }
