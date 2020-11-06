import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '~/app/shared/data.service';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'questionnaire-switch',
	templateUrl: './questionnaire-switch.component.html',
})

export class QuestionnaireSwitchComponent implements OnInit {
    title: number;
    index: number;
    exercises: any;
    item: number;

    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        public route: ActivatedRoute,
        private ds: DataService) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        this.item = this.index + 1 ;
        console.log(this.item)
        // console.log(this.exercises)
    }

    imagePath(index,data){
       return this.ds.imagePath(index,data)
    }
}
