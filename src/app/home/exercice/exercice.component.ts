import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    title: string;
    exercises: any;
    constructor(public routerExtensions: RouterExtensions,
                private ds: DataService,
                private router: ActivatedRoute) { }

	ngOnInit() {
         this.title = this.router.snapshot.params.title;
         this.exercises = this.ds.getLessonOrderbyTitle(this.title).Exercices;
        // console.log(this.ds.getLessonOrderbyTitle(this.title).Exercices);
    }
}
