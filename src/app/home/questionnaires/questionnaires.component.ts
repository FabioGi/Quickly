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
	selector: 'questionnaires',
	templateUrl: './questionnaires.component.html',

})

export class QuestionnairesComponent implements OnInit {
    exercises: any;
    id2: any;
    id: number;
    title: number;
    constructor(private page: Page,
               public routerExtensions: RouterExtensions,
               private ds: DataService,
               private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
    }
	ngOnInit() {
        this.id =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
       this.exercises = this.ds.getExerciseOrderById(this.id, this.title);
       // console.log(this.exercises);
       console.log(this.id)
    }

    imagePath(index,data){
        // return '~/assets/media/'+data[index].image;
        return this.ds.imagePath(index,data);
    }
}
