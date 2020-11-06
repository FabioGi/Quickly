import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '@nativescript/core';
import { RouterExtensions } from 'nativescript-angular';
import { DataService } from '~/app/shared/data.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'quatre-image-bis',
	templateUrl: './quatre-image-bis.component.html'
})

export class QuatreImageBisComponent implements OnInit {
    index: any;
    title: any;
    exercises: any;

    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        private ds: DataService,
        private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        console.log(this.index)
        console.log(this.exercises)
    }
}
