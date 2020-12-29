import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData } from '@nativescript/core';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'questionnaire-qcm',
	templateUrl: './questionnaire-qcm.component.html'
})

export class QuestionnaireQcmComponent implements OnInit {
    index: any;
    title: any;
    exercises: any;
    item: number;
    @ViewChild('checked', { static: true }) checked: ElementRef;
    @ViewChild('checked1', { static: true }) checked1: ElementRef;
    @ViewChild('checked2', { static: true }) checked2: ElementRef;
    @ViewChild('checked3', { static: true }) checked3: ElementRef;
    response: any;
    correct: any;

    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        private ds: DataService,
        private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        this.item = this.index  ;
        console.log(this.item)
     }

     selectImage(data, args: EventData){
        this.checked1.nativeElement.backgroundColor="#007bff";
        this.checked.nativeElement.backgroundColor="#007bff";
        this.checked2.nativeElement.backgroundColor="#007bff";
        this.checked3.nativeElement.backgroundColor="#007bff";
        this.response = data;
        this.correct = this.exercises.answer;
        const arg = args.object as any;
        // arg.color = 'white';
        arg.backgroundColor="#013299";
        // this.verify = true;
        // this.response = data.name;
        // this.response_image = data.image;
        // this.correct = this.exercises.answer;
        // this.correct_image = this.exercises.answer_image;
    }

    sentResponse(){
        this.routerExtensions.navigate(['home','response-qcm',this.item,this.title,this.response,this.correct])
    }
}
