import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ScoringRoutingModule } from "./scoring-routing.module";
import { ScoringComponent } from "./scoring.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScoringRoutingModule
    ],
    declarations: [
        ScoringComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoringModule { }
