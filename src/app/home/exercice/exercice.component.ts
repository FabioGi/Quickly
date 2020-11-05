import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { DataService } from '~/app/shared/data.service';
// import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'exercice',
	templateUrl: "./exercice.component.html"
})

export class ExerciceComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions,
                private ds: DataService) { }

	ngOnInit() {
        // console.log(this.ds.getLessonOrderbyTitle("A table").Exercices);
    }
}
