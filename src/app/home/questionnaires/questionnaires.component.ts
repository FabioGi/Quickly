import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'questionnaires',
	templateUrl: './questionnaires.component.html',

})

export class QuestionnairesComponent implements OnInit {

    constructor(private page: Page,
               public routerExtensions: RouterExtensions,
               private ds: DataService) {
        this.page.actionBarHidden = true;
    }
	ngOnInit() {
       console.log(this.ds.getExerciseOrderById(0,"A table"));
    }
}
