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
    routeLink: string;
    // index: number;
    constructor(public routerExtensions: RouterExtensions,
                private ds: DataService,
                private router: ActivatedRoute) { }

	ngOnInit() {
         this.title = this.router.snapshot.params.title;
         this.exercises = this.ds.getLessonOrderbyTitle(this.title).Exercices;
        // console.log(this.ds.getLessonOrderbyTitle(this.title).Exercices);
    }

    routerGame(index){
        switch(index){
            case 0: this.routerExtensions.navigate(['home','questionnaire',+index,this.title]);
            break;
            case 1: this.routerExtensions.navigate(['home','switch',+index,this.title]);
            break;
            case 2: this.routerExtensions.navigate(['home','qcm',+index,this.title]);
            break;
            case 3: this.routerExtensions.navigate(['home','appar',+index,this.title]);
            break;
            case 4: this.routerExtensions.navigate(['home','quatre-bis',+index,this.title]);
            break;
            case 5: this.routerExtensions.navigate(['home','switch-bis',+index,this.title]);
            break;
            case 6: this.routerExtensions.navigate(['home','qcm-bis',+index,this.title]);
            break;
            case 7: this.routerExtensions.navigate(['home','apar-bis',+index,this.title]);
            break;
            default: this.routerExtensions.navigate(['home']);

         }
    }
}
