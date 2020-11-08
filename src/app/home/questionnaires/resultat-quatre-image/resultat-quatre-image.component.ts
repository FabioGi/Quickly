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
    response: any;
    image: any;
    correct: any;
    final_result:boolean;
    correct_image: any;
    correct_image_path: string;
    bad_image_path: string;
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
         this.response = this.route.snapshot.params.response;
         this.image = this.route.snapshot.params.image;
         this.correct = this.route.snapshot.params.correct;
         this.correct_image = this.route.snapshot.params.cimage;
         this.final_result = this.response == this.correct?true:false;
         this.correct_image_path = '~/assets/media/'+this.correct_image;
         this.bad_image_path =  '~/assets/media/'+this.image;
        //  this.exercises = this.ds.getExerciseOrderById(this.id, this.title);

        // this.exercises = this.ds.getExerciseOrderById(1, this.title);
        // console.log(this.exercises)
        // recuperer la reponse du candidat
        // afficher l'image de la reponse correcte (uniquement en cas de bonne reponse)
        // afficher l'image de la reponse du candidat et la bonne reponse en cas de mauvaise reponse
    }
}
