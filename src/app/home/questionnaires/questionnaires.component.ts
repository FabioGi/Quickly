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
    constructor(private page: Page,
               public routerExtensions: RouterExtensions,
               private ds: DataService,
               private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
    }
	ngOnInit() {
       const id =  +this.route.snapshot.params.id1;
       const id2 = this.route.snapshot.params.id2;
       this.exercises = this.ds.getExerciseOrderById(id, id2);
       console.log(this.exercises);
    }

    imagePath(index,data){
        return '~/assets/media/'+data[index].image;
    }
}
