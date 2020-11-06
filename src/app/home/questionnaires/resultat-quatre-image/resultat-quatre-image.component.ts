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
	selector: 'resultat-quatre-image',
	templateUrl: './resultat-quatre-image.component.html',
})

export class ResultatQuatreImageComponent implements OnInit {
    result: boolean = false;
    title: any;
    exercises: any;
    id: number;
    id2: any;
    item: number;
    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        private route: ActivatedRoute,
        private ds: DataService) {
       this.page.actionBarHidden = true;
}

	ngOnInit() {
         this.title =  this.route.snapshot.params.id2;
         this.id2 = +this.route.snapshot.params.id1;
         this.item = this.id2 + 1 ;
        // this.exercises = this.ds.getExerciseOrderById(1, this.title);
        // console.log(this.exercises)
    }
}
