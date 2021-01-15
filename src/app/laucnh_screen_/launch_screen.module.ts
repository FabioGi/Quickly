import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { LauuchScreenRoutingModule } from "./launchScreen-routing.module";

import { LaunchScreenComponent } from "./launch_screen.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LauuchScreenRoutingModule
    ],
    declarations: [
       LaunchScreenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LaunchScreenModule { }
