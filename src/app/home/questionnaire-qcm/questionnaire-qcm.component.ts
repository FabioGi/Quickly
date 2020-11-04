import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from 'tns-core-modules/ui/page';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'questionnaire-qcm',
	templateUrl: './questionnaire-qcm.component.html'
})

export class QuestionnaireQcmComponent implements OnInit {

    constructor(private page: Page,
        public routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() { }
}
