import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'qcm-response',
	templateUrl: './qcm-response.component.html'
})

export class QcmResponseComponent implements OnInit {
    title: any;
    id1: number;
    item: any;
    id2: number;
    response: any;
    correct: any;
    isCorrect: boolean;

    constructor(public route: ActivatedRoute,
        public routerExtensions: RouterExtensions) { }

	ngOnInit() {
        this.title =  this.route.snapshot.params.id2;
        this.id1 = +this.route.snapshot.params.id1;
        this.response = this.route.snapshot.params.response;
        this.correct = this.route.snapshot.params.correct;
        this.item = this.id1 + 1 ;
        this.isCorrect = this.response == this.correct ;
     }
}
