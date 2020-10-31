import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
// import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'exercice',
	templateUrl: "./exercice.component.html",
	styleUrls: ["./exercice.component.scss"]
})

export class ExerciceComponent implements OnInit {

	constructor(public routerExtensions: RouterExtensions) { }

	ngOnInit() { }
}
