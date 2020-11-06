import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'questionnaire-qcm',
	templateUrl: './questionnaire-qcm.component.html'
})

export class QuestionnaireQcmComponent implements OnInit {
    index: any;
    title: any;
    exercises: any;
    item: number;

    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        private ds: DataService,
        private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        this.item = this.index + 1 ;
        console.log(this.item)
     }
}
